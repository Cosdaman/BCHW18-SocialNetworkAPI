const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

router.route('/').get().post();

router.route(':_id').get().put().delete();

router.route(':thoughtId/reactions').post().delete();

module.exports = router;
