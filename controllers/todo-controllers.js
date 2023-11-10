const { Todo } = require("../models");

module.exports = {
  getAllTodos: async (req, res) => {
    const todos = await Todo.findAll();

    res.json({
      message: "berhasil mendapatkan data todo",
      data: todos,
    });
  },

  getDetailById: async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findOne({
      where: {
        id: todoId,
      },
    });

    if (!todo) {
      res.status(400).json({
        message: "todo tidak ditemukan",
      });
      return;
    }

    res.json({
      message: "berhasil mendapatkan data user",
      data: todo,
    });
  },

  createNewTodo: async (req, res) => {
    const { task, detail } = req.body;

    await Todo.create({
      task,
      status: true, // set nilai default untuk todo baru (incomplete/active)
      detail,
    });

    res.json({
      message: "berhasil menambah todo",
    });
  },

  editTodo: async (req, res) => {
    const todoId = req.params.id;
    const todoToUpdate = await Todo.findOne({
      where: {
        id: todoId,
      },
    });

    const { task, status, detail } = req.body;

    let taskUpdated = task || todoToUpdate.task; // jika value task tidak ada, maka task tidak berubah
    let statusUpdated = status !== undefined ? status : todoToUpdate.status; // jika value status tidak ada, maka status tidak berubah
    let detailUpdated = detail || todoToUpdate.detail;

    await Todo.update(
      { task: taskUpdated, status: statusUpdated, detail: detailUpdated },
      {
        where: {
          id: todoId,
        },
      }
    );

    res.json({
      message: "berhasil mengubah todo",
    });
  },

  deleteTodoById: async (req, res) => {
    const todoId = req.params.id;

    await Todo.destroy({
      where: {
        id: todoId,
      },
    });

    res.json({
      message: "berhasil menghapus todo",
    });
  },

  deleteAllTodos: async (req, res) => {
    await Todo.destroy({
      where: {},
    });

    res.json({
      message: "berhasil menghapus semua todo",
    });
  },
};
