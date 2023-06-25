const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: "A website"
      });
});

module.exports = router;
