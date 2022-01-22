const { User } = require('../models')

module.exports = {

    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        res.send('get single user')
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        res.send('update user')
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