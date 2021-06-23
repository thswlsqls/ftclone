const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");
const { User } = require("../models/User");
const { Post } = require("../models/Post");

const { auth } = require("../middleware/auth");

//=================================
//             Comments
//=================================

// router.post("/getComments", (req, res) => {

//     Comment.find({ "postId": req.body.videoId })
//         .populate('writer')
//         .exec((err, comments) => {
//             if (err) return res.status(400).send(err)
//             res.status(200).json({ success: true, comments })
//         })

// });

router.get("/getComments", (req, res) => {
    Comment.find({})
        .populate('postId')
        .populate('writer')
        .populate('responseTo')
        .exec((err, comments) => {
            if(err) return res.status(400).send(err)
            res.status(200).json({ success: true, comments })
        })
})

router.post("/getThisPostComments", (req, res) => {

    const {postId} = req.body;
    console.log(postId);
    Comment.find({'postId' : postId})
        .populate('writer')
        .populate('postId')
        .populate('responseTo')
        .exec((err, ThisPostCommentLists) => {
            if(err) return res.status(400).send(err);
            res.status(200).json({ success: true, ThisPostCommentLists })
        })
})

router.post("/saveComment", (req, res) => {

    const comment = new Comment(req.body)

    comment.save((err, comment) => {
        if (err) return res.json({ success: false, err })

        Comment.find({ '_id': comment._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })

});

// router.post("/saveComment", (req, res) => {

//     const comment = new Comment(req.body)

//     comment.save((err, comment) => {
//         if (err) return res.json({ success: false, err })

//         Comment.find({ '_id': comment._id })
//             .populate('writer')
//             .exec((err, result) => {
//                 if (err) return res.json({ success: false, err })
//                 return res.status(200).json({ success: true, result })
//             })
//     })

// });

module.exports = router;