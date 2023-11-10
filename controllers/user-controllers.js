const { User } = require("../models");

module.exports = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll();

    res.json({
      message: "berhasil mendapatkan data user",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      res.status(400).json({
        message: "user tidak ditemukan",
      });
      return;
    }

    res.json({
      message: "berhasil mendapatkan data user",
      data: user,
    });
  },

  createNewUser: async (req, res) => {
    const { username, email, password } = req.body;

    await User.create({
      username,
      email,
      password,
    });

    res.json({
      message: "berhasil menambah user",
    });
  },
};
