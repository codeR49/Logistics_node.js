const mongoose = require("mongoose");

const deliveryVehiclesschema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        required: true,
        unique: true,
        maxLength: 12
    },
    vehicleType: {
        type: String,
        enum: ['bike', 'truck'],
        default: 'truck'
    },
    city: {
        type: [String],
        required: true
    },
    activeOrdersCount: {
        type: Number,
        max: 2,
        default: 0
    }
})

module.exports = mongoose.model("DeliveryVehicle", deliveryVehiclesschema);