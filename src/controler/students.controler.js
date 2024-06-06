const Student = require("../models/students.models");

const liststudent = async (req, res) => {

    try {
        const students = await Student.find();
        console.log(students);
        if (!students || students.length === 0) {
            res.status(404).json({
                message: "No students found"
            });
        }
        res.status(200).json({
            message: "students feched",
            success: true,
            data: students
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
}

const getstudent = async (req, res) => {
    try {
        console.log(req.params.student_id);
        const students = await Student.findById(req.params.student_id);
        if (!students) {
            res.status(404).json({
                message: "No students found",
                success: false
            });
        }
        res.status(200).json({
            message: "students feched",
            success: true,
            data: students
        })
        console.log(students);

    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false
        });
    }


}

const addstudent = async (req, res) => {
    try {
        console.log(req.body);
        const students = await Student.create(req.body);
        console.log(students);
        res.status(201).json({
            message: "subcourse added",
            success: true,
            data: students
        })
    } catch (error) {
        res.status(500).json({

            message: "Internal server" + error.message,
            success: false
        });
    }
}


const deletestudent = async (req, res) => {
    try {
        console.log(req.params.student_id);
        const students = await Student.findByIdAndDelete(req.params.student_id);
        if (!students) {
            res.status(404).json({
                message: "No students found",
                success: false
            });
        }
        res.status(200).json({
            message: "students deleted successfully",
            success: true,
            data: students
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false,
            data: students
        });
    }
}

const updatestudent = async (req, res) => {
    try {
        console.log(req.params.student_id);


        const students = await Student.findByIdAndUpdate(req.params.student_id, req.body,{ new: true, runValidators: true });
        if (!students) {
            res.status(404).json({
                message: "No students found",
                success: false
            });
        }
        
        if (!students) {
            res.status(500).json({
                message: "Internal server" + error.message,
                success: true,
                data: students
            });
        }
        res.status(200).json({
            message: "students updated successfully",
            success: true,
            data: students
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server" + error.message,
            success: false,
            data: students
        });
    }
}



module.exports = {
    liststudent,
    getstudent,
    addstudent,
    deletestudent,
    updatestudent

}
