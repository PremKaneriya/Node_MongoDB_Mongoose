const express = require("express")
const routes = require("./routes/api/v1/index");
const connectdb = require("./db/mongoosedb");
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
app.use("/api/v1", routes);

connectdb();
app.listen(8001, () => {
    console.log("Server is running on port 8001");
})