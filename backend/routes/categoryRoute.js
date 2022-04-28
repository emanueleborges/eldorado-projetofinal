const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');
const auth = require('../config/auth');

const router = Router();

router.post('/api/category',  CategoryController.insert);
router.get('/api/category', auth,  CategoryController.read);
router.get('/api/category/:id', CategoryController.read_one);
router.delete('/api/category/:id', CategoryController.delete_one);
router.put('/api/category',  CategoryController.update_one);

module.exports = router;