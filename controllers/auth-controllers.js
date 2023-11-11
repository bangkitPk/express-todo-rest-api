require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        throw new Error("User Not Found");
      }

      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_KEY
        );

        res.json({
          message: "Login successful",
          userId: user.id,
          token,
        });
        return;
      }

      throw new Error("Invalid Password");
    } catch (error) {
      res.json(error.message);
    }
  },

  register: async (req, res) => {
    const { username, email, password } = req.body;

    let saltRounds = 10;
    let hashPassword = await bcrypt.hash(password, saltRounds);

    await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.json({
      message: "berhasil menambah user",
    });
  },
};
