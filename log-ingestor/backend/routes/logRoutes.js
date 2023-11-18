const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();
router.post('/logs', logController.CreateLog);
module.exports = router;