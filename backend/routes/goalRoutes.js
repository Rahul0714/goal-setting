const express = require("express");
const {
  getGoals,
  putGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const router = express.Router();

router.route("/").get(getGoals).post(putGoal);
router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
