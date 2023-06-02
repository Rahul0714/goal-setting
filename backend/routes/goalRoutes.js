const express = require("express");
const {
  getGoals,
  putGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
router.route("/").get(protect, getGoals).post(protect, putGoal);
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
