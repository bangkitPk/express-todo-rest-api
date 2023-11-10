const express = require("express");
const route = express.Router();

const userRoutes = require("./user-routes");
const todoRoutes = require("./todo-routes");

route.get("/", (req, res) => {
  res.json({
    message: "selamat datang di express sequelize",
  });
});

route.use("/users", userRoutes);
route.use("/todos", todoRoutes);

module.exports = route;
