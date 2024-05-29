const Products = require("../models/products.model")

const listProducts = async (req, res) => {
    try {
        const products = await Products.find()

        if (!products || products.length === 0) {

            return res.status(404).json({
                success: false,
                message: "products not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "products Fetched successfully",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }
}

const addProducts = (res, req) => {

    console.log("add Products")
}

const updateProducts = (res, req) => {

    console.log("update Products")
}

const deleteProducts = (res, req) => {

    console.log("delete Products")
}

module.exports = {
    listProducts,
    addProducts,
    updateProducts,
    deleteProducts
}