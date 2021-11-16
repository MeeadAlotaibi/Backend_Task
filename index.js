const express = require("express");//1
const app = express();//2
const morgan = require("morgan");//3
const cors = require("cors");//4
const dotenv = require("dotenv");//5

// let toDos = [
//   { id: 1, name: "reading", isComplated: "false" },
//   { id: 2, name: "studing", isComplated: "false" },
//   { id: 3, name: "practicing", isComplated: "false" },
//   { id: 4, name: "coding", isComplated: "false" },
//   { id: 5, name: "kooking", isComplated: "false" },
// ];
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const PORT = 4000;
app.use(express.json());



app.listen(PORT, () => {
  console.log(`server is running On ${PORT}`);
});
