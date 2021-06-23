const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const answerSchema = mongoose.Schema({

    responsorId:{
        type: Types.ObjectId,
        ref: 'User'
    },
    miniformId: {
        type: Types.ObjectId,
        ref: 'Miniform'
    },
    questionId: {
        type: Types.ObjectId,
        ref: 'Question'
    },
    choiceId: {
        type: Types.ObjectId,
        ref: 'Choice'
    },
    answerContent: {
        type: Types.String,
        default: "content"
    },
    isSubmitted: {
        type: Types.Boolean,
        default: false
    }

}, {timestamps: true})

const Answer = mongoose.model('Answer', answerSchema);
module.exports = {Answer}