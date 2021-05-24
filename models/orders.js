const mongoose = require("mongoose");
const autoIncrement = require("mongoose-plugin-autoinc");
const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: Number,
        unique: true
    },
    itemId: {
        type: ObjectId,
        ref: "Item",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    customerId: {
        type: ObjectId,
        ref: "Customer",
        required: true
    },
    deliveryVehicleId: {
        type: ObjectId,
        ref: "DeliveryVehicle",
        required: true
    },
    isDelivered: {
        type: Boolean,
        default: false,
        required: true

    }

})

orderSchema.plugin(autoIncrement, {
    model: 'Order',
    field: 'orderNumber',
    startAt: 0001,
    incrementBy: 1
});

module.exports = mongoose.model("Order", orderSchema);

