
//Defines the schema of the items in the cart.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrumBoardSchema = Schema({
    assignee: String,
    task: String,
    taskPriority: Number,
    taskSprint: String,
    status: String,
    taskType: String
});

var ToDos = mongoose.model('scrum-boards',scrumBoardSchema);

module.exports = ToDos;