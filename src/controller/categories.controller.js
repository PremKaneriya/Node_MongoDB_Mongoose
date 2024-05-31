const Categories = require("../models/categories.model");

const listCategories = async (req, res) => {
    try {
        const categories = await Categories.find()

        if (!categories || categories.length === 0) {
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

const getCategory = async (req, res) => {
    try {
        console.log(req.params.category_id)
        const category = await Categories.findById(req.params.category_id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Category fetched successfully",
            data: category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        });
    }
};

const addCategory = async (req, res) => {
    try {

        const category = await Categories.create(req.body);

        if (!category) {
            return res.status(400).json({
                success: false,
                message: "category not created"
            })
        }

        res.status(200).json({
            success: true,
            message: "category created successfully",
            data: category
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }

}

const updateCategory = (res, req) => {

    console.log("update Category")
}

const deleteCategory = async (req, res) => {
    try {
        const category = await Categories.findOneAndDelete(req.params.category_id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "category not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "category deleted successfully",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }
}

module.exports = {
    listCategories,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategory
}