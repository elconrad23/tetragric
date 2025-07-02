const express = require('express');
const router = express.Router();

router.get('/proofs', (req, res) => {
  res.json([{ id: 1, farmerId: '0x123', type: 'emissions', amount: 10 }]);
});

module.exports = router;
