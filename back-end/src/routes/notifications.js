const router = require('express').Router();
const controller = require('../controllers/notifications');

router.route('/').get(controller.get).post(controller.post);

router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
