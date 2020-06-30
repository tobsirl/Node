const express = require('express');
const { auth } = require('../middleware/auth');

// Controllers
const {
  login,
  logout,
  logoutAll,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// user endpoints
router.get('/me', auth, getUsers);

router.post('/', createUser);

router.post('/login', login);

router.post('/logout', auth, logout);

router.post('/logoutall', auth, logoutAll);

router.patch('/me', auth, updateUser);

router.delete('/me', auth, deleteUser);

module.exports = router;
