const model = require("../models/discoverModel.js");

// returns discovery list of us website
module.exports.readListUs = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readListUs:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectListUs(callback);
};

// returns discovery list of www website
module.exports.readListWww = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readListWww:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectListWww(callback);
};

// returns discovery of us website
module.exports.readUs = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readUs:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectUs(callback);
};

// returns discovery of www website
module.exports.readWww = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readWww:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectWww(callback);
};

// returns discovery of mobile
module.exports.readM = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error readM:", error);
            res.status(500).json(error);
        } else {
            res.status(200).json(results);
        }
    };

    model.selectM(callback);
};