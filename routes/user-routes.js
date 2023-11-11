const express = require("express");
const route = express.Router();

const { getAllUsers, getUserById } = require("../controllers/user-controllers");

route.get("/", getAllUsers);
route.get("/:id", getUserById);

module.exports = route;
