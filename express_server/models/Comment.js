const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const commmentSchema = mongoose.Schema({

    writer:{
        type: Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: Types.ObjectId,
        ref: 'Post'
    },
    responseTo: {
        type: Types.ObjectId,
        ref: 'Comment'
    },
    content: {
        type: String
    }

}, {timestamps: true})

const Comment = mongoose.model('Comment', commmentSchema);
module.exports = { Comment }
