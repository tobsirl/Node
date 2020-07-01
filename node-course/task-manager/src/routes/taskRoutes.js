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
router.get('/', auth, getTasks);

router.post('/', auth, createTask);

router.get('/:id', auth, getTask);

router.patch('/:id', auth, updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
