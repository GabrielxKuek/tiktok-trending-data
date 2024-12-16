// INCLUDES
const express = require("express");
const router = express.Router();
const controller = require("../controllers/feedController");

// CONTROLLERS
router.get("/", controller.readFeed);

module.exports = router;
