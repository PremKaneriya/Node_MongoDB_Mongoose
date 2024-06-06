const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://premlenovo9three:prem1234@cluster0.yniax1p.mongodb.net/institute")
            .then(() => console.log("connected to hello mongo db"))
            .catch((error) => {
                console.log("error" + error);
            })

    } catch (error) {
        console.log("Error connecting to MongoDB:" + error.message);
    }
};

module.exports = connectdb;
