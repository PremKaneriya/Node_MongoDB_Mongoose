const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    category_id: {
        type: mongoose.Types.ObjectId,
        ref: "Categories",
        required: true
    },
    name: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        lowercase: true
    },
    image: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const Subcategories = mongoose.model("Subcategories", categorySchema)

module.exports = Subcategories
