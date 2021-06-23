const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const questionSchema = mongoose.Schema({

    creator:{
        type: Types.ObjectId,
        ref: 'User'
    },
    miniformId: {
        type: Types.ObjectId,
        ref: 'Miniform'
    },
    type: {
        type: Types.String
    },
    title: {
        type: Types.String,
        maxlength:200,
    },
    description: {
        type: Types.String,
        maxlength:500,
    }
    
}, {timestamps: true})

const Question = mongoose.model('Question', questionSchema);
module.exports = {Question}
