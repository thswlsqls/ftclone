const express = require('express');
const router = express.Router();

const { User } = require("../models/User");
const { Post } = require("../models/Post");

const { auth } = require("../middleware/auth");
const multer = require("multer");

var ffmpeg = require('fluent-ffmpeg');
const sharp = require('sharp');

const {uploadFile} = require('../s3');

const  chalk = require('chalk')
//=================================
//             formDatas
//=================================

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4' || ext !== '.png' || ext !== '.jpeg' || ext !== '.jpg') {
            return cb(res.status(400).end('only jpeg, png, mp4 is allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")
//var uploadfiles = multer({ storage: storage }).array("files", 5);

router.post('/uploadfiles',  (req, res) => {
    
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        console.log(res.req.file)
        // setTimeout(()=>{
            
        // }, 5000)
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })
})

router.post('/thumbnails', (req, res) => {
    
    // 썸네일 생성하고 비디오 러닝타임 가져오기
    let thumbsFilePath ="";
    let fileDuration ="";

    //비디오 정보 가져오기
    ffmpeg.ffprobe(req.body.filePath, function(err, metadata){
        console.dir(metadata);
        console.log(metadata.format.duration);

        fileDuration = metadata.format.duration;
    })

    //썸네일 생성
    ffmpeg(req.body.filePath)
        .on('filenames', function (filenames) {
            console.log('Will generate ' + filenames.join(', '))
            thumbsFilePath = "uploads/thumbnails/" + filenames[0];
        })
        .on('end', function () {
            console.log('Screenshots taken');
            return res.json({ success: true, thumbsFilePath: thumbsFilePath, fileDuration: fileDuration})
        })
        .screenshots({
            // Will take screens at 20%, 40%, 60% and 80% of the video
            count: 3,
            folder: 'uploads/thumbnails',
            size:'320x240',
            // %b input basename ( filename w/o extension )
            filename:'thumbnail-%b.png'
        });
    
})

router.post('/resizing', (req, res) =>{

    // var fileName = req.body.filename
    // console.log(fileName);
    sharp(`${req.body.filePath}`)
        .resize({width: 320})
        .png()
        .toFile(`uploads/resized-${req.body.fileName}`, (err, info)=>{
            if(err) {
            console.log(`info ${info}`)
            console.log(req.body.filePath);
            }
            else{
                return res.json({success: true});
            }
        })
        //return res.json({success: true});
})

router.post('/fileUpload', (req, res) =>{

    const filePath = req.body.thumbnail=="" ?  req.body.resizedFilePath : req.body.filePath 
    console.log(filePath);
    uploadFile(filePath);

    const post = new  Post(req.body)
    post.save((err, doc) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true})
    });
    
})

router.get('/getPosts', (req, res) =>{

    //게시글을 db에서 가져와 react_server로 보냅니다.
    Post.find()
        .populate('writer')
        .exec((err, posts)=>{
            if(err) return res.status(400).send(err);
            res.status(200).json({ success:true, posts})
        })
        
})

module.exports = router;