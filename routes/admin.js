const express = require('express');
const router = express.Router();

router.get('/products', (req,res,next) => {
    res.send('hello');
});

module.exports = router;