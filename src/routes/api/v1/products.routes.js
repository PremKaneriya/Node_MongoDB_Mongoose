const express = require('express')
const { productsController } = require('../../../controller')


const route = express.Router()

route.get(
    "/list-products",
    productsController.listProducts
)

route.post(
    "/create-product",
    productsController.addProducts
)

route.put(
    "/update-product",
    productsController.updateProducts
)

route.delete(
    "/delete-product",
    productsController.deleteProducts
)

module.exports = route