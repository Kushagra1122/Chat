const mongoose = require("mongoose");

    const userModel = new mongoose.Schema({
        fullName: {
            type: String,
            required:true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required:true
        },
        profile_pic: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: true
        }
    }, {
        timestamps: true
    })

module.exports = mongoose.model("userData", userModel);