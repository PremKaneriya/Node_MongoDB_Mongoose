const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Types.ObjectId,
        ref: "Orders",
        required: true
    },
    courier: {
        type: String,
        required: true
    },
    current_place: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

const Shippers = mongoose.model("Shippers", orderSchema)

module.exports = Shipping