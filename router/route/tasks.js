const express = require("express");
const { getAllTasks, getisComplated, createTask } = require("./../route/tasks");

const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/isComplated", getisComplated);
taskRouter.get("/create", createTask);

module.exports = taskRouter;
