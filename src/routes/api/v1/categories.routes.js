const express = require('express')
const { categoriesController } = require('../../../controller')

const route = express.Router()

route.get(
    "/list-categories",
    categoriesController.listCategories
)

route.get("/get-categories/:category_id", categoriesController.getCategory);

route.post(
    "/create-category",
    categoriesController.addCategory
)

route.put(
    "/update-category/:category_id",
    categoriesController.updateCategory
)

route.delete(
    "/delete-category/:category_id",
    categoriesController.deleteCategory
)


module.exports = route