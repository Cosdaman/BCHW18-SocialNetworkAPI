const { User } = require('../models')

module.exports = {

    getUsers(req, res) {
        res.send('get user')
    },
    getSingleUser(req, res) {
        res.send('get single user')
    },
    createUser(req, res) {
        res.send('create user')
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