const express = require('express');
const { auth } = require('../middleware/auth');

// Controllers
const {
  login,
  logout,
  logoutAll,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// user endpoints
router.get('/me', auth, getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.post('/login', login);

router.post('/logout', auth, logout);

router.post('/logoutall', auth, logoutAll);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
