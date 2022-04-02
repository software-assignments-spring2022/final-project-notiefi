const router = require('express').Router();
const controller = require('../controllers/users');

router
  .route('/')
  .get(controller.get)

router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

router
  .route('/create')
  .post(controller.post);

module.exports = router;
