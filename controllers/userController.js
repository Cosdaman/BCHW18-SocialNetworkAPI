const { User } = require('../models')

module.exports = {

    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            {
                username: req.body.username,
                email: req.body.email
            },
            {
                new: true,
            }
        )
            .then((user) => res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        res.send('delete user')
    },
    addUserFriend(req, res) {
        res.send('add friend')
    },
    deleteUserFriend(req, res) {
        res.send('delete friend')
    }
}