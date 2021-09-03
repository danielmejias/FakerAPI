const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  deleteUser,
  getUser,
  editUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).put(editUser);
module.exports = router;
