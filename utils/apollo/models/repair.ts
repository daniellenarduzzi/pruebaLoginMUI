const mongoose = require('mongoose');

const repairSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    img: {
        type: String
    },

    category: {
        type: String,
        required: true
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId
    },

    state: {
        type: String
    },
    
    price: {
        type: Number
    },

}, {
    timestamps: true
})

export const Repair = mongoose.model('Repair', repairSchema)