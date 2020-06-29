const express = require('express');
const { auth } = require('../middleware/auth');

// Controllers
const {
  login,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// user endpoints
router.get('/', auth, getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.post('/login', login);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
