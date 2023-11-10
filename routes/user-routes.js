const express = require("express");
const route = express.Router();

const {
  getAllUsers,
  getUserById,
  createNewUser,
} = require("../controllers/user-controllers");

route.get("/", getAllUsers);
route.get("/:id", getUserById);
route.post("/", createNewUser);

module.exports = route;
