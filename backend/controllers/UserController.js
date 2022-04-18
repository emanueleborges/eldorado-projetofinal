const database = require('../models');
const bcrypt    = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

class UserController {

    /**
     * GET /api/user/login
     */
     static async login(req, res) {
        const { Email, Password } = req.body;
        try {
            const login_one = await database.User.findOne({ where: { Email: Email } });
            if (!login_one) {
                return res.status(404).json(login_one);
            } else {
                const authUser = await bcrypt.compare(Password, login_one.password);

                if(!authUser){
                return res.status(422).json({
                    message: "Incorrect password",
                    });
                }

                const token = jwt.sign({
                    email: authUser.email,
                    id: authUser.id
                },
                    'minhachave', {
                    expiresIn: '1m'
                });
                return res.status(200).json({ token: token });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

     /**
     * POST /user
     */
    static async register(req, res) {
        const { Email, Password } = req.body;
        try
        {
            const login_one = await database.User.findOne({ where: { email: Email } });
            if (login_one.length > 0) {
                return res.status(201).json({
                    message: "The E-mail already in use",
                });
            }
            if (login_one != null) {
                return res.status(409).json(login_one);
            } else {
                const hashPass = await bcrypt.hash(Password, 10);
                const insert_user = await database.User.create({ email: Email, password: hashPass });
                return res.status(200).json(insert_user);
            }
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
    /**
     * POST /user
     */
     static async insert(req, res) {
        const { Name } = req.body;
        try {
            const insert_one = await database.User.create({ Name: Name });
            return res.status(200).json(insert_one);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /user/:id
     */
    static async read(req, res) {
        try {
            const read = await database.User.findAll();
            return res.status(200).json(read);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    /**
     * GET /user/:id
     */
    static async read_one(req, res) {
        const { id } = req.params;
        try {
            const readone = await database.User.findOne({where: { id: id }});
            return res.status(200).json(readone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * POST /user/:id
     */
    static async delete_one(req, res) {
        const { id } = req.params;
        try {
            const readone = await database.User.destroy({where: { id: id }});
            return res.status(200).json(readone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    /**
     * PUT /user
     */
    static async update_one(req, res) {
        const { id, Name } = req.body;
        try {
            const updateone = await database.User.update({ Name: Name  }, {where: { id: id } });
            return res.status(200).json(updateone);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


}

module.exports = UserController;