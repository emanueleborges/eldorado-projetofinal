const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const router = Router();

router.get('/api/category', CategoryController.read);


module.exports = router;