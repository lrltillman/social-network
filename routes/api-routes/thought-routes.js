const router = require('express').Router();


const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    deleteReaction,
    createReaction
} = require("../../controllers/thoughtController");

router.route("/")
    .get(getThoughts)

router.route("/:userId")
    .post(createThought);

router.route("/:_id")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router.route("/:thoughtId/reactions")
    .post(createReaction)

router.route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction)

// post/delete (may do $pull method again) to thought route /api/thoughts/:thoughtId/reactions in its own function 

module.exports = router;