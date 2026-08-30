const express = require("express");

const {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} = require("../controllers/jobcontrollers");

//routes

const router = express.Router();


// Create Job
router.post("/", createJob);

// Get All Jobs
router.get("/", getJobs);

// Get Job By ID
router.get("/:id", getJobById);

// Update Job
router.put("/:id", updateJob);

// Delete Job
router.delete("/:id", deleteJob);


module.exports = router;