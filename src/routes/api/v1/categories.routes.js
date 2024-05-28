const express = require('express')
const { categoriesController } = require('../../../controller')

const route = express.Router()

route.get(
    "/list-categories",
    categoriesController.listCategories
)

route.post(
    "/create-category",
    categoriesController.addCategory
)

route.put(
    "/update-category",
    categoriesController.updateCategory
)

route.delete(
    "/delete-category",
    categoriesController.deleteCategory
)


module.exports = route