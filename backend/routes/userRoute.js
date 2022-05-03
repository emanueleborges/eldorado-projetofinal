const { Router } = require('express');
const UserController = require('../controllers/UserController');
const router = Router();
router.post('/api/user/login', UserController.login);
router.post('/api/user/cadastro', UserController.register);
module.exports = router;