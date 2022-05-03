const database = require('../models');

class DeviceController {
    /**
     * POST /category
     */
     static async insert(req, res) {
        const { Color, PartNumber, Category_fk } = req.body;
        try {
            const insert_one = await database.Device.create({ Color: Color , PartNumber: PartNumber, Category_fk: Category_fk  });
            return res.status(200).json(insert_one);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /device/:id
     */
    static async read(req, res) {
        try {
           
              const read = await database.Device.findAll({
                include: [
                    {
                      model: database.Category,
                    },
                  ],
                order: [
                  ["id", "DESC"],
                ],
              });

            return res.status(200).json(read);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /device/:id
     */
    static async read_one(req, res) {
        const { id } = req.params;
        try {
            const readone = await database.Device.findOne({where: { id: id }});
            return res.status(200).json(readone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /device/:id
     */
    static async delete_one(req, res) {
        const { id } = req.params;
        try {
            const readone = await database.Device.destroy({where: { id: id }});
            return res.status(200).json(readone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * PUT /device
     */
    static async update_one(req, res) {
        const { id, Color, PartNumber, Category_fk } = req.body;
        try {
            const updateone = await database.Device.update({ Color: Color , PartNumber: PartNumber, Category_fk: Category_fk  }, {where: { id: id } });
            return res.status(200).json(updateone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}


module.exports = DeviceController;