require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const app = express();


const itemRoutes = require("./routes/items")
const deliveryVehiclesRoutes = require("./routes/deliveyVehicles")
const customerRoutes = require("./routes/customers")
const orderRoutes = require("./routes/orders")

//DB Connection
const uri = process.env.DB_URI

mongoose
  .connect(uri,
   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.use(express.urlencoded())
app.use(express.json())



//Routes
app.use("/api", itemRoutes)
app.use("/api", deliveryVehiclesRoutes)
app.use("/api", customerRoutes)
app.use("/api", orderRoutes)


// Port
  const port = 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});