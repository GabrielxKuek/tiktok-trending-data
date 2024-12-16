const fs = require('fs');
const path = require('path');

module.exports.selectFeed = async (callback) => {
    try {
        const feedPath = path.resolve(__dirname, '../../api-feed.json');
        const feedData = fs.readFileSync(feedPath, 'utf8');
        const feed = JSON.parse(feedData);

        if (!feed) {
            throw new Error("Feed data is null or undefined.");
        }

        callback(null, feed);
    } catch (err) {
        callback(err, null);
    }
};