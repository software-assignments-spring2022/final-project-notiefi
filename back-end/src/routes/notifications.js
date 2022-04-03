const router = require('express').Router();
const controller = require('../controllers/notifications');

router.route('/').get(controller.get);

router
  .route('/:id')
  .get(controller.getById)
  .post(controller.post)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;
