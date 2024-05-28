const express = require('express')
const { categoriesController } = require('../../../controller')

const route = express.Router()

route.get(
    "/list-categories",
    categoriesController.listCategories
)

route.post("/", (req, res) => {
    res.send("Post Category")
})

route.put("/", (req, res) => {
    res.send("Put Category")
})

route.delete("/", (req, res) => {
    res.send("Delete Category")
})



module.exports = route