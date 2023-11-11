const express = require("express");
const route = express.Router();

const authRoutes = require("./auth-routes");
const userRoutes = require("./user-routes");
const todoRoutes = require("./todo-routes");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di express sequelize",
  });
});

route.use("/auth", authRoutes);
route.use("/users", userRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;
