const { Todo } = require("../models");

module.exports = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.findAll({
      where: {
        userId: req.user.id,
      },
    });

    res.json({
      message: "Successfully retrieved todos data",
      data: todos,
    });
  },

  getDetailById: async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findOne({
      where: {
        id: todoId,
        userId: req.user.id,
      },
    });

    if (!todo) {
      res.status(400).json({
        message: "Todo not found",
      });
      return;
    }

    res.json({
      message: "Successfully retrieved todo data",
      data: todo,
    });
  },

  createNewTodo: async (req, res) => {
    const { task, detail } = req.body;

    await Todo.create({
      userId: req.user.id,
      task,
      status: true, // set nilai default untuk todo baru (incomplete/active)
      detail,
    });

    res.json({
      message: "Successfully created a new todo",
    });
  },

  editTodo: async (req, res) => {
    const todoId = req.params.id;
    const todoToUpdate = await Todo.findOne({
      where: {
        id: todoId,
        userId: req.user.id,
      },
    });

    if (!todoToUpdate) {
      res.status(400).json({
        message: "Todo not found",
      });
      return;
    }

    const { task, status, detail } = req.body;

    let taskUpdated = task || todoToUpdate.task; // jika value task tidak ada, maka task tidak berubah
    let statusUpdated = status !== undefined ? status : todoToUpdate.status; // jika value status tidak ada, maka status tidak berubah
    let detailUpdated = detail || todoToUpdate.detail;

    await Todo.update(
      { task: taskUpdated, status: statusUpdated, detail: detailUpdated },
      {
        where: {
          id: todoId,
          userId: req.user.id,
        },
      }
    );

    res.json({
      message: "Successfully updated the todo",
    });
  },

  deleteTodoById: async (req, res) => {
    const todoId = req.params.id;

    await Todo.destroy({
      where: {
        id: todoId,
        userId: req.user.id,
      },
    });

    res.json({
      message: "Successfully deleted the todo",
    });
  },

  deleteAllTodos: async (req, res) => {
    await Todo.destroy({
      where: {
        userId: req.user.id,
      },
    });

    res.json({
      message: "Successfully deleted all todos",
    });
  },
};
