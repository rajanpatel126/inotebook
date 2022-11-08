const mongoose = require('mongoose');

const NoteSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true,
    },
    tag:{
        type: String,
        default: 'general'
    },
    date:{
        type: Date,
        default: date.now
    }
});

module.exports = mongoose.Schema('Notes',NoteSchema)