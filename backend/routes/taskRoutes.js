const express = require("express");
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, addTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
