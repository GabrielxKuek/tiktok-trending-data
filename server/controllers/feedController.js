const model = require("../models/feedModel.js");

module.exports.readFeed = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readFeed:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectFeed(callback);
};
