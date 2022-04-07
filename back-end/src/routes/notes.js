const router = require('express').Router();
const controller = require('../controllers/notes');

router.route('/').get(controller.get);

router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

router.route('/create').post(controller.post);

router.route('/:id/like').put(controller.like);

router.route('/saved').post(controller.postNotes);
router.route('/saved').get(controller.getSavedNotes);

module.exports = router;
