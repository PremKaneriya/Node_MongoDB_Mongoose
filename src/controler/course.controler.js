

const Course = require("../models/course.models");

const listcourse = async (req, res) => {
    console.log("GET");
    try {
        const courses = await  Course.find();
        console.log(courses);

        console.log(courses);
        if (!courses || courses.length === 0) {
            return res.status(404).json({
                message: "No courses found",
                success: false
            });
        }
        res.status(200).json({
            message: "Courses fetched",
            success: true,
            data: courses
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

const getcourse = async (req, res) => {
    try {
        console.log(req.params.course_id);
        const courses = await Course.findById(req.params.course_id);
        if (!courses) {
            return res.status(404).json({
                message: "No courses found",
                success: false
            });
        }
        res.status(200).json({
            message: "Course fetched",
            success: true,
            data: courses
        });
        console.log(courses);
    } catch (error) {
        res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
}

const addcourse = async (req, res) => {
    try {
        console.log(req.body);
        const courses = await Course.create(req.body);
        console.log(courses);
        res.status(201).json({
            message: "Course added",
            success: true,
            data: courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
}

const deletecourse = async (req, res) => {
    try {
        console.log(req.params.course_id);
        const courses = await Course.findByIdAndDelete(req.params.course_id);
        if (!courses) {
            return res.status(404).json({
                message: "No courses found",
                success: false
            });
        }
        res.status(200).json({
            message: "Course deleted successfully",
            success: true,
            data: courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
}

const updatecourse = async (req, res) => {
    try {
        console.log(req.params.course_id);
        const courses = await Course.findByIdAndUpdate(req.params.course_id, req.body, { new: true, runValidators: true });
        if (!courses) {
            return res.status(404).json({
                message: "No courses found",
                success: false
            });
        }
        res.status(200).json({
            message: "Course updated successfully",
            success: true,
            data: courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error: " + error.message,
            success: false
        });
    }
}

module.exports = {
    listcourse,
    getcourse,
    addcourse,
    deletecourse,
    updatecourse
}
