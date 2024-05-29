const Categories = require("../models/categories.model");

const listCategories = async (req, res) => {
    try {
        const categories = await Categories.find()
        
        if(!categories || categories.length === 0) {
            return res.status(404).json({
                success: false,
                message: "categories not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "categories Fetched successfully",
            data: categories
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })        
    }
}

const addCategory = (res, req) => {

    console.log("add Category")
}

const updateCategory = (res, req) => {

    console.log("update Category")
}

const deleteCategory = (res, req) => {

    console.log("delete Category")
}

module.exports = {
    listCategories,
    addCategory,
    updateCategory,
    deleteCategory
}