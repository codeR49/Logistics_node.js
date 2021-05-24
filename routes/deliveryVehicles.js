const express = require("express")

const router = express.Router()

const { createDeliveryVehicle, getDeliveryVehicle, getAllDeliveryVehicle, updateDeliveryVehicle} = require("../controllers/deliveryVehicles")


//create
router.post('/item/create/', createDeliveryVehicle)

//read
router.get("/category/:itemId", getDeliveryVehicle)

router.get("/categories", getAllDeliveryVehicle)

//update
router.put("/category/:categoryId/", updateDeliveryVehicle)


module.exports = router