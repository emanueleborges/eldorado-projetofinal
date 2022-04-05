const { Router } = require('express');
const DeviceController = require('../controllers/DeviceController');

const router = Router();

router.get('/api/device', DeviceController.read);


module.exports = router;