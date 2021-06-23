const express = require('express');
const router = express.Router();
const { Like } = require("../models/Like");
// const { Dislike } = require("../models/Dislike");

const { auth } = require("../middleware/auth");

//=================================
//             Likes DisLikes
//=================================

router.post("/getLikes", (req, res) => {

    
    let reqData = (req.body.commentId) ? { commentId: req.body.commentId } : ((req.body.postId) ? { postId: req.body.postId } : {});

    Like.find(reqData)
        .populate('postId')
        .populate('userId')
        .populate('commentId')
        .exec((err, likeList) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, likeList: likeList })
        })
})

router.get("/getLikes", (req, res) => {

    Like.find({})
        .populate('postId')
        .populate('userId')
        .populate('commentId')
        .exec((err, likeList) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, likeList })
        })
})


router.post("/getLikeState", (req, res) => {

    let reqData = (req.body.commentId) ?
        {
            userId: req.body.userId,
            commentId: req.body.commentId    
        } :
        {
            userId: req.body.userId,
            postId: req.body.postId 
        }

    Like.find(reqData)
        .exec((err, like) => {
            if (err) return res.status(400).send(err);
            let isLike = like.length>0 ?  true : false
            res.status(200).json({ success: true, like, isLike})
        })
})


router.post("/getLikeCount", (req, res) => {
    
    let reqData = (req.body.commentId) ?
        {
            // userId: req.body.userId,
            commentId: req.body.commentId    
        } :
        {
            // userId: req.body.userId,
            postId: req.body.postId 
        }

    // if (req.body.postId) {
    //     variable = { postId: req.body.postId }
    // } else {
    //     variable = { commentId: req.body.commentId }
    // }

    Like.find(reqData)
        .exec((err, likes) => {
            let LikeCount = likes.length;
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, likes, LikeCount: LikeCount})
        })

})



router.post("/getDislikes", (req, res) => {

    let variable = {}
    if (req.body.postId) {
        variable = { postId: req.body.postId }
    } else {
        variable = { commentId: req.body.commentId }
    }

    Dislike.find(variable)
        .exec((err, dislikes) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, dislikes })
        })

})


router.post("/upLike", (req, res) => {

    // let reqData = (req.body.commentId) ? 
    //     { 
    //         userId: req.body.userId, 
    //         commentId: req.body.commentId 
    //     } : 
    //     { 
    //         userId: req.body.userId, 
    //         postId: req.body.postId 
    //     };

    let reqData ={
        userId: req.body.userId, 
        commentId: req.body.commentId,
        postId: req.body.postId 
    };

    const like = new Like(reqData);
    
    like.save((err, likeResult) => {
        if (err) return res.json({ success: false, err });
        res.status(200).json({ success: true, likeResult })

        //In case disLike Button is already clicked, we need to decrease the dislike by 1 
        // Dislike.findOneAndDelete(variable)
        //     .exec((err, disLikeResult) => {
        //         if (err) return res.status(400).json({ success: false, err });
        //         res.status(200).json({ success: true })
        //     })
    })

})

router.post("/unLike", (req, res) => {

    // let reqData = {}
    // if (req.body.postid) {
    //     reqData = { 
    //         postid: req.body.postid, 
    //         userId: req.body.userId 
    //     }
    // } else {
    //     reqData = { 
    //         commentId: req.body.commentId, 
    //         userId: req.body.userId 
    //     }
    // }

    // let reqData = (req.body.commentId) ? 
    // { 
    //     userId: req.body.userId, 
    //     commentId: req.body.commentId, 
    // } : 
    // { 
    //     userId: req.body.userId, 
    //     postId: req.body.postId 
    // };

    let reqData ={
        userId: req.body.userId, 
        commentId: req.body.commentId,
        postId: req.body.postId 
    }

    Like.findOneAndDelete(reqData)
        .exec((err, likeResult) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true, likeResult })
        })

})


// router.post("/unDisLike", (req, res) => {

//     let variable = {}
//     if (req.body.postId) {
//         variable = { postId: req.body.postId, userId: req.body.userId }
//     } else {
//         variable = { commentId: req.body.commentId , userId: req.body.userId }
//     }

//     Dislike.findOneAndDelete(variable)
//     .exec((err, result) => {
//         if (err) return res.status(400).json({ success: false, err })
//         res.status(200).json({ success: true })
//     })

// })


// router.post("/upDisLike", (req, res) => {

//     let variable = {}
//     if (req.body.postId) {
//         variable = { postId: req.body.postId, userId: req.body.userId }
//     } else {
//         variable = { commentId: req.body.commentId , userId: req.body.userId }
//     }

//     const disLike = new Dislike(variable)
//     //save the like information data in MongoDB
//     disLike.save((err, dislikeResult) => {
//         if (err) return res.json({ success: false, err });
//         //In case Like Button is already clicked, we need to decrease the like by 1 
//         Like.findOneAndDelete(variable)
//             .exec((err, likeResult) => {
//                 if (err) return res.status(400).json({ success: false, err });
//                 res.status(200).json({ success: true })
//             })
//     })

// })

module.exports = router;