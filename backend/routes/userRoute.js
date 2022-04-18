const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/api/user/login', UserController.login);
router.post('/api/user/cadastro', UserController.register);

router.post('/api/user', UserController.insert);
router.get('/api/user', UserController.read);
router.get('/api/user/:id', UserController.read_one);
router.delete('/api/user/:id', UserController.delete_one);
router.put('/api/user', UserController.update_one);

module.exports = router;