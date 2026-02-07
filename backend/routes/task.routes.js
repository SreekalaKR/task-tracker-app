const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controller');

// CREATE
router.post('/tasks', controller.createTask);

// READ
router.get('/tasks', controller.getTasks);

// UPDATE
router.put('/tasks/:id/status', controller.updateStatus);

// DELETE  ❗❗❗ THIS MUST EXIST
router.delete('/tasks/:id', controller.deleteTask);

module.exports = router;
