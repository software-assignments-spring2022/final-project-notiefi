const router = require('express').Router();
const controller = require('../controllers/profileImage');

router.route('/').get(controller.get).post(controller.post);

router
  .route('/:id')

module.exports = router;