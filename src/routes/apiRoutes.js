const express = require('express');
const router = express.Router();
const data = require('../services/dataServices');

router.get('/scans', (req, res) => {
  res.json(data.getData());
});

module.exports = router;
