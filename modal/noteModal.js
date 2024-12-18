const mongoose = require('mongoose');

const noteSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
    },
    content:{
        type:"String",
        required: true,
    },
    category:{
        type:"String",
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    }
},{timestamps:true});

module.exports = mongoose.model('Note', noteSchema);