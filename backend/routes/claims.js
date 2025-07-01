const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const dummyClaims = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        values: [200, 150, 300, 100]
    };
    res.json(dummyClaims);
});

module.exports = router;