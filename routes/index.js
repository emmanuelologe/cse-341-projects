const router = require('express').Router();

router.use('/', require('./swagger'));
router.get('/', (req, res) => {res.send('hello World');});

router.use('/contacts', require('./contacts'));

module.exports = router;