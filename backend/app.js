// app.js
const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
const app = express();

// Routes
const PickupRouter = require("./Routes/PickupRoute"); // Corrected path to PickupRoute
const DeliveryRouter = require("./Routes/DeliveryRoute");

// Middleware
app.use(express.json());
app.use(cors());
app.use("/pickups", PickupRouter); // Updated route to use PickupRouter
app.use("/deliveries", DeliveryRouter);

// DB connection
connectDB(app); // Pass the app instance to connectDB

// Start the server
const PORT = process.env.PORT || 5000; // Use port 5000 instead of 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
