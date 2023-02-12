const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require("../../controllers/usersController")

router.route('/').get(getUsers).post(createUser);

router
  .route('/:userId')
  .get(getSingleUser)
  .put(createUser)
  .delete(deleteUser);

module.exports = router;