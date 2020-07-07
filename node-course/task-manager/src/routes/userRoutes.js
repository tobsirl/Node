const express = require('express');
const { auth } = require('../middleware/auth');
const multer = require('multer');
const upload = multer({
  dest: 'avatars',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error(`Please upload a jpg, jpeg, png`));
    }

    cb(undefined, true);
  },
});

// Controllers
const {
  login,
  logout,
  logoutAll,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  uploadAvatar,
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

router.post('/me/avatar', upload.single('avatar'), uploadAvatar)

module.exports = router;
