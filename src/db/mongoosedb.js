const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://premlenovo9three:prem1234@cluster0.yniax1p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://premlenovo9three:prem1234@cluster0.yniax1p.mongodb.net/ecommerce')
            .then(() => console.log('mongo connected'))
            .catch((err) => console.log(err));
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = connectDB


