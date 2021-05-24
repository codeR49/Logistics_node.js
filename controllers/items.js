const Item = require("../models/items")

exports.getItemById = (req, res, next, id) => {
    Item.findById(id)
    .exec((err, item) =>{
        if(err) {
            return res.status(400).json({
                error: "Item is not found in DB"
            })
        }
        req.item = item
        next()
    })
}

exports.createItem = (req, res) => {
    const item = new Item(req.body)
    item.save( (err, item) => {
        if(err) {
            return res.status(400).json({
                error: "Item is not saved in DB "
            })
        }
        res.json(item)
    })
}

exports.getItem = (req, res) => {
    res.json(req.item)
}

exports.getAllItem = (req, res) => {
     Item.find()
        .exec((err, items) => {
            if(err) {
                return res.status(400).json({
                    error: "Items not found in DB "
                })
            }
            res.json(items)
        })
}

exports.updateItem = (req, res) => {
    const item = req.item
    item.save((err, updatedItem) => {
        if(err) {
            return res.status(400).json({
                error: "Failed to update item "
            })
        }
        return res.json(updatedItem)
    })
}