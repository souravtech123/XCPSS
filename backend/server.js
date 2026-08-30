const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobroutes");

const app = express();

const PORT = 5000;
connectDB();
// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
// Basic Route
app.get("/", (req, res) => {
    res.json({
        message: "XCPSS Backend is running 🚀"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});