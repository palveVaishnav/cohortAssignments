const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// parsing request body
app.use(bodyParser.json());

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    /**
     * POST /admin/signup
        Description: Creates a new admin account.
        Input Body: { username: 'admin', password: 'pass' }
        Output: { message: 'Admin created successfully' }
     */
    const { username, password } = req.body;
    Admin.create({
        username: username,
        password: password
    });
    res.json({
        message: 'Admin created successfully'
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    /**
     * POST /admin/courses
        Description: Creates a new course.
        Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
        Output: { message: 'Course created successfully', courseId: "new course id" }
     */
    const { title, description, price, imageLink } = req.body;
    Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
    });
    res.json({
        message: 'Course created successfully',
        courseId: "new course id"
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    /*
    GET /admin/courses
    Description: Returns all the courses.
    Input: Headers: { 'username': 'username', 'password': 'password' }
    Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
    */
    Course.find()
        .then((course) => {
            res.json(course)
        });

});

module.exports = router;