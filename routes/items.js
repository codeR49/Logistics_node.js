const express = require("express")

const router = express.Router()

const { createItem, getItem, getAllItem, updateItem } = require("../controllers/items")


//create
router.post('/item/create/', createItem)

//read
router.get("/category/:itemId", getItem)

router.get("/categories", getAllItem)

//update
router.put("/category/:categoryId/", updateItem)


module.exports = router

