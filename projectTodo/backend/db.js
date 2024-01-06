/* 

*/

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://palvevaishnav09:<fuckofff>@cluster0.qfum1fw.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
    todo
}
