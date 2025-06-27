const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/:reportName', (req, res) => {
    const reportName = req.params.reportName;
    const filePath = path.join(__dirname, '../static/reports', reportName);
    res.download(filePath);
});

module.exports = router;
