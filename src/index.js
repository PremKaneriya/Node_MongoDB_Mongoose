const express = require("express")
const connectDB = require('./db/mongoosedb');
const app = express()

const routes = require("./routes/api/v1/index");

app.use('/api/v1', routes)

connectDB();

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

