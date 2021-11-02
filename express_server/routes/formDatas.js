const express = require('express');
const router = express.Router();
const cors = require('cors');

const { User } = require('../models/User');
const { Post } = require('../models/Post');

const { auth } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

var ffmpeg = require('fluent-ffmpeg');

// ubuntu server에서 필요한 코드
// ffmpeg.setFfmpegPath('/usr/local/bin/ffmpeg/ffmpeg');
// ffmpeg.setFfprobePath('/usr/local/bin/ffmpeg/ffprobe');
//

const sharp = require('sharp');

//ubuntu server에서 필요한 코드
// const { ffprobe } = require('fluent-ffmpeg');
// const Ffmpeg = require('fluent-ffmpeg');
//

const { uploadFile } = require('../s3');

const chalk = require('chalk');
//=================================
//             formDatas
//=================================

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (
      ext !== '.mp4' ||
      ext !== '.MP4' ||
      ext !== '.avi' ||
      ext !== '.AVi' ||
      ext !== '.mpg' ||
      ext !== '.MPG' ||
      ext !== '.wmv' ||
      ext !== '.WMV' ||
      ext !== '.mwa' ||
      ext !== '.MWA' ||
      ext !== '.asf' ||
      ext !== '.ASF' ||
      ext !== '.mpeg' ||
      ext !== '.MPEG' ||
      ext !== '.mov' ||
      ext !== '.MOV' ||
      ext !== '.m4r' ||
      ext !== '.M4R' ||
      ext !== '.3gp' ||
      ext !== '.3GP' ||
      ext !== '.3g2' ||
      ext !== '.3G2' ||
      ext !== '.webm' ||
      ext !== '.WEBM' ||
      ext !== '.mkv' ||
      ext !== '.MKV' ||
      ext !== '.nut' ||
      ext !== '.NUT' ||
      ext !== '.sec' ||
      ext !== '.SEC' ||
      ext !== '.xmv' ||
      ext !== '.XMV' ||
      ext !== '.y4m' ||
      ext !== '.Y4M' ||
      ext !== '.png' ||
      ext !== '.PNG' ||
      ext !== '.jpeg' ||
      ext !== '.JPEG' ||
      ext !== '.jpg' ||
      ext !== '.JPG' ||
      ext !== '.jif' ||
      ext !== '.JIF' ||
      ext !== '.tiff' ||
      ext !== '.TIFF' ||
      ext !== '.svg' ||
      ext !== '.SVG' ||
      ext !== '.webp' ||
      ext !== '.WebP'
    ) {
      return cb(res.status(400).end('NOT ALLOWED FILE FORMAT'), false);
    }
    cb(null, true);
  },
});

var upload = multer({ storage: storage }).single('file');
var mulUpload = multer({ storage: storage }).array('files', 12);

router.post('/uploadSingleFile', (req, res) => {
  console.log(req.body.file);
  console.log('파일개수' + req.body.filesCount);
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    console.log(res.req.file);
    // if (String(res.req.file.mimetype).startsWith('video')) {
    //   ffmpeg(res.req.file.path).output(
    //     String(res.req.file.path).replace(
    //       path.extname(res.req.file.path),
    //       '.mp4'
    //     )
    //   );
    // }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
      mimetype: res.req.file.mimetype,
    });
  });
});

router.post('/uploadMulFiles', (req, res) => {
  console.log(req.body.file0);
  console.log(req.body.filesCount);
  console.log(req.data);
  console.log(req.body.file);
  res.send(req.body);
  // return ?res;
  // mulUpload(req, res, (err) => {
  //   if (err) {
  //     return res.json({ success: false, err });
  //   }
  //   console.log(res.req.files);
  //   return res.json(res.req.files);
  // });
});

router.post('/thumbnails', (req, res) => {
  // 썸네일 생성하고 비디오 러닝타임 가져오기
  // return res.json({
  //   test: '404errtest',
  // });
  let thumbsFilePath = '';
  let fileDuration = '';

  //비디오 정보 가져오기
  ffmpeg.ffprobe(req.body.filePath, function (err, metadata) {
    console.dir(metadata);
    console.log(metadata.format.duration);

    fileDuration = metadata.format.duration;
  });

  //썸네일 생성
  ffmpeg(req.body.filePath)
    .on('filenames', function (filenames) {
      console.log('Will generate ' + filenames.join(', '));
      thumbsFilePath = 'uploads/thumbnails/' + filenames[0];
    })
    .on('end', function () {
      console.log('Screenshots taken');
      return res.json({
        success: true,
        thumbsFilePath: thumbsFilePath,
        fileDuration: fileDuration,
      });
    })
    .on('error', function (err) {
      console.error(err);
      return res.json({ success: false, err });
    })
    .screenshots({
      // Will take screens at 20%, 40%, 60% and 80% of the video
      count: 3,
      folder: 'uploads/thumbnails',
      size: '320x240',
      // %b input basename ( filename w/o extension )
      filename: 'thumbnail-%b.png',
    });
});

router.post('/resizing', (req, res) => {
  // var fileName = req.body.filename
  // console.log(fileName);
  sharp(`${req.body.filePath}`)
    .resize({ width: 320 })
    .png()
    .toFile(`uploads/resized-${req.body.fileName}`, (err, info) => {
      if (err) {
        console.log(`info ${info}`);
        console.log(req.body.filePath);
      } else {
        return res.json({ success: true });
      }
    });
  //return res.json({success: true});
});

router.post('/fileUpload', (req, res) => {
  let rIndex = 0;
  let tIndex = 0;

  const uploadFunc = async function (index, mimetype) {
    let ArrsObj = await new Promise((resolve, reject) => {
      resolve({
        mimetypesArr: req.body.mimetypesArr,
        filePathsArr: req.body.filePathsArr,
        resizedFilePathsArr: req.body.resizedFilePathsArr,
        thumbnailsArr: req.body.thumbnailsArr,
      });
    });

    let sendReq = await new Promise((resolve, reject) => {
      if (String(mimetype).startsWith('image')) {
        // 이미지 파일이면,
        uploadFile(ArrsObj.resizedFilePathsArr[rIndex++], mimetype); // 리사이즈 이미지를 업로드하고 인덱스를 1 증가함
        console.log(rindex + '번째 이미지를 업로드했습니다.');
      } else if (String(mimetype).startsWith('video')) {
        // 비디오 파일이면,
        uploadFile(ArrsObj.filePathsArr[index], mimetype); // 원본 파일을 업로드함
        uploadFile(ArrsObj.thumbnailsArr[tIndex++], mimetype); // 썸네일_1 파일을 업로드하고 인덱스를 1 증가함
        console.log(index + '번째 동영상을 업로드했습니다.');
        console.log(tindex + '번째 썸네일을 업로드했습니다.');
      } else {
        return res.json({ success: false, err });
      }
      resolve(ArrsObj.mimetypesArr);
    });

    return sendReq;
  };

  const post = new Post(req.body); // 데이터베이스에 저장함 -

  post.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });

  for (let i = 0; i < req.body.filePathsArr.length; i++) {
    uploadFunc(i, req.body.mimetypesArr[i]).then((value) => {
      console.log(value);
    });
    if (i == req.body.filePathsArr.length) {
      return res.status(200).json({ success: true });
    }
  }

  // const filePath =
  //   req.body.thumbnail == '' ? req.body.resizedFilePath : req.body.filePath;
  // const ext = path.extname(req.body.filePath);
  // const mimetype = req.body.mimetype;

  // console.log(filePath);
  // uploadFile(filePath, mimetype); //이미지 파일인 경우에는 리사이징 파일을, 동영상 파일인 경우에는 원본파일을 업로드함

  // // uploadFile(req.body);
});

router.get('/getPosts', (req, res) => {
  //게시글을 db에서 가져와 react_server로 보냅니다.
  Post.find()
    .populate('writer')
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, posts });
    });
});

router.delete('/deletePost', (req, res) => {
  Post.findByIdAndDelete(req.body.postId, { $set: req.body }, (err, doc) => {
    if (err) return res.json({ success: false, err: err });
    return res.status(200).json({ success: true, doc: doc });
  });
});

module.exports = router;
