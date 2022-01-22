const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email address not valid']
        },
        thoughts: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'thought'
        }],
        friends: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'user'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

modelSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})


const User = mongoose.model('User', modelSchema);

const handleError = (err) => console.error(err);

module.exports = User;
