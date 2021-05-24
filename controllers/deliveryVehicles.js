const DeliveryVehicle = require("../models/deliveryVehicles");

exports.getDeliveryVehicleById = (req, res, next, id) => {
    DeliveryVehicle.findById(id)
    .exec((err, deliveryVehicle) =>{
        if(err) {
            return res.status(400).json({
                error: "Delivery Vehicle is not found in DB"
            })
        }
        req.deliveryVehicle = deliveryVehicle
        next()
    })
}

exports.createDeliveryVehicle = (req, res) => {
    const deliveryVehicle = new DeliveryVehicle(req.body)
    deliveryVehicle.save( (err, deliveryVehicle) => {
        if(err) {
            return res.status(400).json({
                error: "Delivery Vehicle is not saved in DB "
            })
        }
        res.json(deliveryVehicle)
    })
}

exports.getDeliveryVehicle = (req, res) => {
    res.json(req.deliveryVehicle)
}

exports.getAllDeliveryVehicle = (req, res) => {
     DeliveryVehicle.find()
        .exec((err, deliveryVehicles) => {
            if(err) {
                return res.status(400).json({
                    error: "Delivery Vehicles not found in DB "
                })
            }
            res.json(deliveryVehicles)
        })
}

exports.updateDeliveryVehicle = (req, res) => {
    const deliveryVehicle = req.deliveryVehicle
    deliveryVehicle.save((err, updatedDeliveryVehicle) => {
        if(err) {
            return res.status(400).json({
                error: "Failed to update delivery vehicles "
            })
        }
        return res.json(updatedDeliveryVehicle)
    })
}