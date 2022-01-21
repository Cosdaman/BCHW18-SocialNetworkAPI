const { Thought } = require('../models')

module.exports = {
    getThoughts(req, res) {
        res.send('get thought')
    },
    getSingleThought(req, res) {
        res.send('get single')
    },
    createThought(req, res) {
        res.send('create thought')
    },
    updateThought(req, res) {
        res.send('update thought')
    },
    deleteThought(req, res) {
        res.send('delete thought')
    },
    createReaction(req, res) {
        res.send('create react')
    },
    deleteReaction(req, res) {
        res.send('delete reaction')
    },
}