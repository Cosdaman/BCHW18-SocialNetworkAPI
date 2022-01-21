const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    // reactionId: {
    //     type: mongoose.ObjectId,
    //     default: new ObjectId,
    // },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
        // getter thing
    }
});

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
    reactions: [reactionSchema]
});

const Thought = mongoose.model('Thought', modelSchema);


module.exports = Thought;
