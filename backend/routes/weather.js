const express = require('express');
const router = express.Router();

router.get('/forecast/:region', (req, res) => {
    const region = req.params.region;
    const forecast = {
        region,
        risk: 'High Drought Risk',
        rainfall: 'Below average',
        temperature: 'Above normal'
    };
    res.json(forecast);
});

module.exports = router;