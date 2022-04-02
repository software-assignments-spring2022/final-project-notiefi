const router = require('express').Router();
const searchController = require('../controllers/classes/search');

router
  .route('/search')
  .post(searchController.post);

module.exports = router;