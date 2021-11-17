const express = require("express");
const taskRouter = express.Router();
const { 
     getAllTasks,
     getisComplated, 
     createTask 
    } = require("./../route/tasks");


taskRouter.get("/", getAllTasks);
taskRouter.get("/isComplated", getisComplated);
taskRouter.post("/create", createTask);

module.exports = taskRouter;
