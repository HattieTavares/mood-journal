const mongoose = require("mongoose");

const CheckinSchema = new mongoose.Schema({
    scaleNumber: {
        type: Number,
        required: true,
    },
    note: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    createdById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Checkin", CheckinSchema);
