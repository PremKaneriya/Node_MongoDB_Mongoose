const mongoose = require("mongoose")

const attributies = mongoose.Schema(
    {
        name: {
            type: String,
            lowercase: true,
            required: true,
            trim: true,
            unique: true
        },
        value: {
            type: String,
            trim: true,
            required: true
        }, 
        stock: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    }
)

const varientSchems = mongoose.Schema(
    {
        product_id: {
            type: mongoose.Types.ObjectId,
            ref: "Products",
            required: true
        },
        attributes: [attributies]
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Varients = mongoose.model("Varients", varientSchems)

module.exports = Varients