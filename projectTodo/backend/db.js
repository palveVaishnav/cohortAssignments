/* 

*/

const mongoose = require("mongoose")

mongoose.connect("database url here");
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}
