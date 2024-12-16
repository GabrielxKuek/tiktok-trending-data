const fs = require('fs');
const path = require('path');

const readJsonFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// returns discovery of list us website
module.exports.selectListUs = async (callback) => {
    try {
        const filePath = path.resolve(__dirname, '../../discover-list-us.json');
        const data = readJsonFile(filePath);

        if (!data) {
            throw new Error("Data is null or undefined.");
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};

// returns discovery of list www website
module.exports.selectListWww = async (callback) => {
    try {
        const filePath = path.resolve(__dirname, '../../discover-list-www.json');
        const data = readJsonFile(filePath);

        if (!data) {
            throw new Error("Data is null or undefined.");
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};

// returns discovery of us website
module.exports.selectUs = async (callback) => {
    try {
        const filePath = path.resolve(__dirname, '../../discover-us.json');
        const data = readJsonFile(filePath);

        if (!data) {
            throw new Error("Data is null or undefined.");
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};

// returns discovery of www website
module.exports.selectWww = async (callback) => {
    try {
        const filePath = path.resolve(__dirname, '../../discover-www.json');
        const data = readJsonFile(filePath);

        if (!data) {
            throw new Error("Data is null or undefined.");
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};

// returns discovery of mobile
module.exports.selectM = async (callback) => {
    try {
        const filePath = path.resolve(__dirname, '../../discover-m.json');
        const data = readJsonFile(filePath);

        if (!data) {
            throw new Error("Data is null or undefined.");
        }

        callback(null, data);
    } catch (err) {
        callback(err, null);
    }
};