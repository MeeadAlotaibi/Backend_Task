const  mongo  = require("mongoose");

const todoSchema = new mongo.Schema({
  task: {
    type: String,
    required: true,
  },
  isDel: {
    type: Boolean,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
});


const todoModel = mongo.model("todo", todoSchema);

module.exports = {
  todoModel,
};
