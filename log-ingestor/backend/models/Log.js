const mongoose = require('mongoose');
const logSchema = new mongoose.Schema({
    level: String,
    message: String,
    resourceId: String,
    timestamp: String,
    traceId: String,
    spanId: String,
    commit: String,
    metadata: {
        parentResourceId: String,
    },
});
module.exports = mongoose.model('Log', logSchema);
