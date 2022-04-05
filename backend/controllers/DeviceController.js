const database = require('../models')

class DeviceController {

    static async read(req, res) {
        try {
            const read = await database.Device.findAll()
            return res.status(200).json(read)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = DeviceController