const express = require("express");
const router = express.Router();

// define routes
const discoverRoute = require("./discoverRoute");
const feedRoute = require("./feedRoute");

// use routes
router.use("/discover", discoverRoute);
router.use("/feed", feedRoute);

module.exports = router;
