const mongoose = require('mongoose');
const helpers =  require('../utils/formatDate'); 


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
            get: helpers.formatDate,
        },
    },
    {
        toJSON: {
            getters: true,
        }
    },
    {
        id: false,
    },

);

// function formatDate(createdAt) {
//     return dayjs(createdAt).format('YYYY-MM-DD-HH:mm')
// }



module.exports = reactionSchema;

