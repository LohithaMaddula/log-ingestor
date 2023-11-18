const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const logRoutes = require('./routes/logRoutes');
const app = express();
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));

app.use('/api/logs', logRoutes);
// app.get('/logs', (req, res) => {
//     const query = req.query.quey;
//     const filter = query ? { message: { $regex: query, $options: 'i' } } : {};
//     Log.find(filter, (err, logs) => {
//         if (err) {
//             res.status(500).json({ error: 'Failed to fetch logs' });
//         } else {
//             res.json(logs);
//         }
//     })
// })
module.exports = app;