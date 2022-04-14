var express = require('express');
const food_controller = require('../controllers/food');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('foods', { title: 'Search Results' });
});
*/

/* GET costumes */
router.get('/', food_controller.food_view_all_Page );

module.exports = router;
