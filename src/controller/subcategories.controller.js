const Subcategories = require("../models/subcategories.model")

const listsubcategories = async (req, reschat) => {
    try {
        const subcategories = await Subcategories.find();

        if (!subcategories || subcategories.length === 0) {

            return res.status(404).json({
                success: false,
                message: "subcategories not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "subcategories Fetched successfully",
            data: subcategories
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "internal server error" + error.message
        })
    }
}

const addsubcategory = (req, res) => {

    console.log("add subcategory")

}

const updatesubcategory = (req, res) => {

    console.log("update subcategory")

}

const deletesubcategory = (req, res) => {

    console.log("delete subcategory")

}

module.exports = {
    listsubcategories,
    addsubcategory,
    updatesubcategory,
    deletesubcategory
}