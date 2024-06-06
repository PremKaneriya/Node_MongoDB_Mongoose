const mongoose = require('mongoose');

// Define the subcourse schema
const subcourseSchema = new mongoose.Schema({
    subcourseName: {
        type: String,
        required: true,
        trim: true,
    },
    subcourseCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    courseCode: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
},
{
    timestamps: true,
    versionKey: false
});

// Create the Subcourse model
const Subcourse = mongoose.model('Subcourse', subcourseSchema);

module.exports = Subcourse;
