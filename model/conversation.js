const mongoose = require("mongoose");

const conversationModel = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userData"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "messageData"
    }]
}, { timestamps: true });
module.exports = mongoose.model("conversationData", conversationModel);