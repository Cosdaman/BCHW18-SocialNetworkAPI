const mongoose = require('mongoose');


const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            Type: mongoose.Types.ObjectId,
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
            default: Date.now,
            // getter thing
        },
    },
    {
        id: false,
    }
);

module.exports = reactionSchema;

