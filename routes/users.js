const express = require('express')

const router = express.Router();

router.get('/specific', (req, res) => {
    res.send('Specific User');
});

module.exports = router;