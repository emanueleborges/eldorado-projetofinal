const { Router } = require('express');
const DeviceController = require('../controllers/DeviceController');
const auth = require('../config/auth');
const router = Router();
router.post('/api/device',  DeviceController.insert);
router.get('/api/device',  DeviceController.read);
router.get('/api/device/:id',  DeviceController.read_one);
router.delete('/api/device/:id',  DeviceController.delete_one);
router.put('/api/device',  DeviceController.update_one);
module.exports = router;