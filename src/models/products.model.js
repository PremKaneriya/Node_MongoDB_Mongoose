const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: "Categories",
            required: true
        },
        subcategory_id: {
            type: mongoose.Types.ObjectId,
            ref: "Subcategories",
            required: true
        },
        name: {
            type: String,
            trim: true,
            lowercase: true,
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

const Products = mongoose.model("Products", productSchema)

module.exports = Products