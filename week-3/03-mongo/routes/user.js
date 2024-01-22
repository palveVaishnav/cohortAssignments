const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    User
        .create({
            username: username,
            password: password
            // username:"user",
            // password:"pass"
        })
        .then(() => {
            res.json({
                message: 'User created successfully'
            })
        });

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find()
        .then((course) => {
            res.json(course)
        });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const userId = req.user._id;
    const CourseId = req.params.courseId;
    
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router

