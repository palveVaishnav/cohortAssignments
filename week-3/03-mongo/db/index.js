const mongoose = require('mongoose');
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);
// Admin
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});
const Admin = mongoose.model('Admin', AdminSchema);
// User
const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Courses
const CourseSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
});
const Course = mongoose.model('Course',CourseSchema);

// Purchases
const PurchaseSchema = new mongoose.Schema({
    userId:String,
    CourseId:String
});
const Purchase = mongoose.model('Purchase',PurchaseSchema)

// const Admin = mongoose.model('Admin', AdminSchema);
// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    Purchase
}