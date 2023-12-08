const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser)

router.route("/api/users/:userId/friends").post(createUser)

router.route("/api/users/:userId/friends/:friendId").delete(deleteUser);

module.exports = router;

