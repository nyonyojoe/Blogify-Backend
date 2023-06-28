const mongoose = require("mongoose")

//Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user"
    },
    password: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    inVerified: {
        type: String,
        default: false
    },
    accountLevel: {
        type: String,
        enum: ["bronze", "silver", "gold"],
        default: "bronze"
    },
    profilePicture: {
        type: String,
        default: "",
    },
    coverImage: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
    },
    location: {
        type: String,
    },
    notificationPreferences: {
        email: {
            type: String, default: true
        }
        // other notifications (sms)
    },
    gender:{
        type:String,
        enum:["male","female","prefer not to say","non-binary"]
    },
    profileView: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    follower: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    blockedUsers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    likedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    passwordResetToken: {
        type:String
    },
    passwordResetExpires: {
        type:Date
    },
    accountVerificationToken: {
        type: String,
    },
    accountVerificationExpires: {
        type: String,
    },
},{timestamps: true})

//compile Schema to model

const User = mongoose.model("User",userSchema)

module.exports = User;