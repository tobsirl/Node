const express = require('express');
const { auth } = require('../middleware/auth');

const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// task endpoints
router.get('/', getTasks);

router.post('/', auth, createTask);

router.get('/:id', getTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
