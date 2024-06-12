const express = require("express")
const connectDB = require('./db/mongoosedb');
const app = express()
const cors = require('cors')

 
const routes = require("./routes/api/v1/index");

app.use(cors())

app.use(express.json())

app.use('/api/v1', routes)


connectDB();

app.listen(8001, () => {
    console.log("Listening on port 8000")
})

