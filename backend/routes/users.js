const express = require('express');
const router = express.Router();

const farmers = [];

router.post('/register', (req, res) => {
    const { name, location, walletId } = req.body;
    if (!walletId) return res.status(400).json({ error: 'Wallet ID required' });

    const newFarmer = {
        id: farmers.length + 1,
        name,
        location,
        walletId,
        registeredAt: new Date()
    };

    farmers.push(newFarmer);
    res.status(201).json(newFarmer);
});

module.exports = router;
