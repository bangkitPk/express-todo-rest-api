const express = require("express");
const route = express.Router();

const {
  getAllTodos,
  getDetailById,
  createNewTodo,
  editTodo,
  deleteTodoById,
  deleteAllTodos,
} = require("../controllers/todo-controllers");

route.get("/", getAllTodos);
route.get("/:id", getDetailById);
route.post("/", createNewTodo);
route.put("/:id", editTodo);
route.delete("/:id", deleteTodoById);
route.delete("/", deleteAllTodos);

module.exports = route;
