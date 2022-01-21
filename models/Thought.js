const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // getter thing
    },
    username: {
        type: String,
        required: true,
    },
    // reactions: {
    // }
});

const Thought = mongoose.model('Thought', modelSchema);


module.exports = Thought;
