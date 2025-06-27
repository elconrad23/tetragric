const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const sampleData = {
        chartData: [120, 110, 90, 130]
    };
    res.json(sampleData);
});

module.exports = router;