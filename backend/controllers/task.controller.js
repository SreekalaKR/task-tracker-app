const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = new Task({ title: req.body.title });
  await task.save();

  res.status(201).json(task);
};

// Get All Tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

// Update Task Status
exports.updateStatus = async (req, res) => {
  const { status } = req.body;

  if (!['TODO', 'IN_PROGRESS', 'DONE'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  // ❌ Rule: TODO → DONE not allowed
  if (task.status === 'TODO' && status === 'DONE') {
    return res.status(400).json({ message: 'Invalid status transition' });
  }

  task.status = status;
  await task.save();

  res.status(200).json(task);
};

// Delete Task
exports.deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
  
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
  
    await task.deleteOne();
    res.status(200).json({ message: 'Task deleted successfully' });
  };
  