const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const choiceSchema = mongoose.Schema({
    
    miniformId:{
        type: Types.ObjectId,
        ref: 'Miniform'    
    },
    questionId: {
        type: Types.ObjectId,
        ref: 'Question'
    },
    choiceContent: {
        type: Types.String,
        maxlength:200,
    }
    
}, {timestamps: true})

const Choice = mongoose.model('Choice', choiceSchema);
module.exports = {Choice}

