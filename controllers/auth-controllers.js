const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = {
  login: (req, res) => {},
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
