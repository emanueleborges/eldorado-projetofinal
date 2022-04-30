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
                return res.status(404).json({ message: 'User not found'});
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
                    process.env.AUTH_SECRET, {
                    expiresIn: process.env.AUTH_EXPIRESIN,
                    
                });
                //return res.status(200).json({ token: token });

                return  res.header("token", token).send({token: token});
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
            if (login_one) {
                return res.status(201).json({
                    message: "User already in use",
                });
            } else {
                const hashPass = await bcrypt.hash(Password, 10);
                const insert_user = await database.User.create({ email: Email, password: hashPass });
                return res.status(200).json(insert_user);
            }
        } catch(error){
            return res.status(500).json(error.message);
        }
    }
  
  


}

module.exports = UserController;