//Defines the schema of the items in the cart.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = Schema({
    userName: String,
    item: String,
    isPurchased: Boolean,
    hasAttachment: Boolean
});

var ToDos = mongoose.model('ToDos',todoSchema);

module.exports = ToDos;