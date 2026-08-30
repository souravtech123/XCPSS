const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://souravsuman846_db_user:ELD3s2wCbIBS1sqA@cluster0.1arshix.mongodb.net/XCPSS');

        console.log("MongoDB Connected ✅");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;