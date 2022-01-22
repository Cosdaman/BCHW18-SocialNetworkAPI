const connection = require('../config/connection');
const { User, Thought } = require('../models');



connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = [];
    const thoughts = [];
    const reactions = [];

    for (let index = 0; index < 20; index++) {
        let reaction = {
            reactionBody: `reaction ${index}`,
            username: `user${Math.floor(Math.random() * 4)}`,
            createdAt: Date()
        }
        reactions.push(reaction)
    }

    for (let index = 0; index < 4; index++) {
        let uservar = {
            username: `user${index}`,
            email: `email${index}@email${index}.com`
        }
        users.push(uservar)
    }

    // for (let index = 0; index < 4; index++) {

    //     let thought = {
    //         thoughtText: `thought text ${index}`,
    //         createdAt: Date(),
    //         username: `user${Math.floor(Math.random() * 4)}`,
    //     }
    //     thoughts.push(thought)
    // }

    // await User.collection.insertMany(users);
    // await Thought.collection.insertMany(thoughts);

})

