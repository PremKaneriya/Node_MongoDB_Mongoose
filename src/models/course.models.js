const mongoose = require('mongoose');

// Define the course schema
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    fees: {
        type: Number,
        required: true,
    },
    deurection: {
        type: Number,
        trim: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
