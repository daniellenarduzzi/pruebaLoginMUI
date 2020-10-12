const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
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
        required: true
    },

    location: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    repairAssigned: {
        type: mongoose.Schema.Types.ObjectId
    },

    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export const Merchant = mongoose.model('Merchant', merchantSchema)