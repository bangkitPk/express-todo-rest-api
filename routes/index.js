const express = require("express");
const route = express.Router();

const authRoutes = require("./auth-routes");
const todoRoutes = require("./todo-routes");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Todo API!",
    info: "This API provides endpoints for managing todos.",
    author: "Bangkit Putra Kristana",
    version: "1.0.0",
  });
});

route.use("/auth", authRoutes);
route.use("/todos", verifyToken, todoRoutes);

module.exports = route;
