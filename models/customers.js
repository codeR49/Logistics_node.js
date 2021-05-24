const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 30
    },
    city: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    }

})

module.exports = mongoose.model("Customer", customerSchema);