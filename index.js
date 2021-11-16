const express = require("express"); //1
const app = express(); //2 //instiate express
const morgan = require("morgan"); //3
const cors = require("cors"); //4
const dotenv = require("dotenv"); //5
const taskRouter = require("./Router/route/tasks");
dotenv.config();

//built-in level middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const middle = (req, res, next) => {
  try {
    console.log("There is no mistakes");
    next();
  } catch (error) {
    res.status(401).json("There is something wrong");
  }
};

app.use(middle, taskRouter);

const PORT = 4000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running On ${PORT}`);
});
