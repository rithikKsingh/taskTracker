const Task = require("../models/Task");

const addTask = async (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "No task added" });
  }

  try {
    const newTask = await Task.create({
      userId: req.user.id,
      task,
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addTask,
  getTasks,
  deleteTask,
};
