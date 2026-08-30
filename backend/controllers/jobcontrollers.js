const Job = require("../models/job");

// Create a new Job
const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);

        res.status(201).json({
            success: true,
            message: "Job created successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create job",
            error: error.message
        });
    }
};


// Get all Jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: jobs.length,
            jobs
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch jobs",
            error: error.message
        });
    }
};


// Get single Job
const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch job",
            error: error.message
        });
    }
};


// Update Job
const updateJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            job
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update job",
            error: error.message
        });
    }
};


// Delete Job
const deleteJob = async (req, res) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);

        if (!job) {
            return res.status(404).json({
                success: false,
                message: "Job not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Job deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete job",
            error: error.message
        });
    }
};


module.exports = {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
};