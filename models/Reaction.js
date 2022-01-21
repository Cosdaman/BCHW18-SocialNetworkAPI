const mongoose = require('mongoose');


const modelSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.ObjectId,
        default: new ObjectId,
    },
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

const Reaction = mongoose.model('Reaction', modelSchema);

module.exports = Reaction;
