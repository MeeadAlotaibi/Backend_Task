const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const taskRouter = require("./router/route/tasks");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/////////////////////////

let toDos = [
  { id: 1, name: "reading", isComplated: "false" },
  { id: 2, name: "studing", isComplated: "false" },
  { id: 3, name: "practicing", isComplated: "false" },
  { id: 4, name: "coding", isComplated: "false" },
  { id: 5, name: "kooking", isComplated: "false" },
];

app.use(taskRouter);
const PORT = process.env.PORT || 4000;

const getAllTasks = (req, res) => {
  res.status(200).json(toDos);
};

const getisComplated = (req, res) => {
  const result = toDos.filter((element) => {
    element.isComplated === true;
    res.status(200).json(toDos);
  });
};

const createTask = (req, res) => {
  const { id, name, isComplated } = req.prams;
  toDos.push({ id: id, name: name, isComplated: false });
  res.status(200).json({ id, name, isComplated });
};

module.exports = { 
   getAllTasks,
   getisComplated, 
   createTask 
  };
