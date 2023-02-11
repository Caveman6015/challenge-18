const router = require('express').Router();
const courseRoutes = require('./courseRoutes');
const studentRoutes = require('./studentRoutes');
//http://localhost/api/courses
router.use('/courses', courseRoutes);
//http://localhost/api/students
router.use('/students', studentRoutes);

module.exports = router;
