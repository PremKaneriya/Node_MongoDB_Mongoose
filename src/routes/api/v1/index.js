const express = require("express")

const route = express.Router()

const categoryRouter = require("./categories.routes")

route.use("/categories", categoryRouter)

module.exports = route

