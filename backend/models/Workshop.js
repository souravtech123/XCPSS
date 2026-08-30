const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        venue: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            enum: ["On-Campus", "Off-Campus"],
            required: true
        },

        registrationLink: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Workshop", workshopSchema);