const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
    },

    location: {
        type: String,
    },

    phone: {
        type: String,
        required: true
    },

    repair: {
        type: mongoose.Schema.Types.ObjectId
    },

}, {
    timestamps: true
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)