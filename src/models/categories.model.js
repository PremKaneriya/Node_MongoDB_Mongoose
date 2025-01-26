const mongoose = require("mongoose")

const categoriesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
            trim: true,
            unique: true
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        cat_img: {
            type: {
                type: String,
                trim: true
            }
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

const Categories = mongoose.model("Categories", categoriesSchema)

module.exports = Categories