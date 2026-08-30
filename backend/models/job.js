const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            trim: true
        },

        jobRole: {
            type: String,
            required: true,
            trim: true
        },

        package: {
            type: String,
            trim: true
        },

        eligibility: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        location: {
            type: String,
            trim: true
        },

        jobType: {
            type: String,
            enum: ["On-Campus", "Off-Campus"],
            required: true
        },

        applicationLink: {
            type: String,
            trim: true
        },

        deadline: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Job", jobSchema);