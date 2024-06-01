const express = require("express")
const { subcategoriesController } = require("../../../controller")

const route = express.Router()

route.get(
    "/list-subcategories",
    subcategoriesController.listsubcategories
)

route.post(
    "/create-subcategory",
    subcategoriesController.addsubcategory
)

route.put(
    "/update-subcategory",
    subcategoriesController.updatesubcategory
)

route.delete(
    "/delete-subcategory",
    subcategoriesController.deletesubcategory
)

module.exports = route