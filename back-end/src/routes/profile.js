const router = require('express').Router();
const controller = require('../controllers/profile');

router
  .route('/')
  .get(controller.get)
  .post(controller.post);

module.exports = router;
