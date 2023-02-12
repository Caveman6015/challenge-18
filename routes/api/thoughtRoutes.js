const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    addThought,
    deleteThought,
} = require('../../controllers/thoughtController.js')

router.route('/').get(getThoughts).post(addThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(addThought)
    .delete(deleteThought);

    module.exports = router;