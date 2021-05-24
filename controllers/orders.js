const Order = require("../models/orders");

exports.createOrder = (req, res) => {
    const order = new Order(req.body)
    order.save( (err, order) => {
        if(err) {
            return res.status(400).json({
                error: "Order is not saved in DB "
            })
        }
        res.json(order)
    })
}