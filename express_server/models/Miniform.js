const mongoose = require('mongoose');

const Types = mongoose.Schema.Types;

const miniformSchema = mongoose.Schema({

    creator:{
        type: Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: Types.String,
        maxlength:50,
    },
    type: {
        type: Types.String
    }
    
}, {timestamps: true})

const Miniform = mongoose.model('Miniform', miniformSchema);
module.exports = {Miniform}
