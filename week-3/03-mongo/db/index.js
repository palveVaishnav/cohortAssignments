const mongoose = require('mongoose');
require("dotenv").config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});
const Admin = mongoose.model('Admin', AdminSchema);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

const CourseSchema = new mongoose.Schema({
    // id: Number,
    title: String,
    description: String,
    price: Number,
    imageLink: String,
});

const Course = mongoose.model('Course',CourseSchema);

// const Admin = mongoose.model('Admin', AdminSchema);
// const User = mongoose.model('User', UserSchema);
// const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}