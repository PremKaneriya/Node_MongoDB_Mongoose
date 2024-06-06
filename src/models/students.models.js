const mongoose = require('mongoose');

// Define the student schema
const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
        trim: true,
    },
    studentID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    enrolledCourses: [{
        type: String,
        trim: true,
    }],
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    year: {
        type: String,
        required: true,
        trim: true,
    },
},
{
    timestamps: true,
    versionKey: false
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
