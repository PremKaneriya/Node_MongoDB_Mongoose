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

// const addsubcategory = async (req, res) => {
//     try {
//         const { name, description, categoryId } = req.body;

//         if (!name || !description || !categoryId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Name, description, and category ID are required"
//             });
//         }

//         const subcategory = await Subcategory.create({
//             name,
//             description,
//             categoryId
//         });

//         if (!subcategory) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Subcategory not created"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Subcategory created successfully",
//             data: subcategory
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Internal server error: " + error.message
//         });
//     }
// }

module.exports = {
    listsubcategories
    // addsubcategory
}