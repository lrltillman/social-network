const router = require('express').Router();


const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts)
    .post(createThought);

router.route("/thoughtId").get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router.route("/:thoughtId/reactions").post(createThought)

router.route("/:thoughtId/reactions/:reactionId").delete(deleteThought)

// post/delete (may do $pull method again) to thought route /api/thoughts/:thoughtId/reactions in its own function 