const express = require('express');

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
router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.post('users/login', login);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
