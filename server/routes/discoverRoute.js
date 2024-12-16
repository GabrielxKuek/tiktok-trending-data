const express = require('express');
const router = express.Router();
const controller = require("../controllers/discoverController");

// Define your routes here
router.get('/', (req, res) => {
    res.send('Discover route');
});

router.get("/list/us", controller.readListUs);
router.get("/list/www", controller.readListWww);
router.get("/us", controller.readUs);
router.get("/www", controller.readWww);
router.get("/m", controller.readM);

module.exports = router;