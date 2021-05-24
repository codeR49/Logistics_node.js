const Customer = require("../models/customers")

exports.getCustomerById = (req, res, next, id) => {
    Customer.findById(id)
    .exec((err, customer) =>{
        if(err) {
            return res.status(400).json({
                error: "Customer is not found in DB"
            })
        }
        req.customer = customer
        next()
    })
}

exports.createCustomer = (req, res) => {
    const customer = new Customer(req.body)
    customer.save( (err, customer) => {
        if(err) {
            return res.status(400).json({
                error: "Customer is not saved in DB "
            })
        }
        res.json(customer)
    })
}

exports.getCustomer = (req, res) => {
    res.json(req.item)
}

