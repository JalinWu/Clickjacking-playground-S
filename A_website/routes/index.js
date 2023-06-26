const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/andyProfile', (req, res) => {
  res.render('andyProfile');
});

module.exports = router;
