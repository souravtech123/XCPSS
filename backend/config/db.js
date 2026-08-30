const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/xcpdb');

        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;