const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/classes', require('./classes'));
router.use('/notes', require('./notes'));
router.use('/notifications', require('./notifications'));

module.exports = router;
