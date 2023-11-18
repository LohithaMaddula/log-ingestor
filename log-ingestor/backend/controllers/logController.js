const Log = require('../models/Log');
exports.CreateLog = async (req, res) => {
    try {
        const log = new Log(req.body);
        await log.save();
        res.status(201).json({
            message: 'Log created successfully.'
        });

    }
    catch (err)
    {
        console.error(err);
        res.status(500).json({
            error: 'An error occurred while creating the log.'
        });
    }

};