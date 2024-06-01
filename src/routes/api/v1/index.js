const express = require("express")

const route = express.Router()

const categoryRouter = require("./categories.routes")

const subcategoryrouter = require("./subcategories.routes")

const productRouter = require("./products.routes")

route.use("/categories", categoryRouter)

route.use("/subcategories", subcategoryrouter)

route.use("/products", productRouter)

module.exports = route

