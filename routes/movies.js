var express = require('express');
const movie_controlers= require('../controllers/movies');
var router = express.Router();
/* GET costumes */
router.get('/', movie_controlers.movie_view_all_Page );
module.exports = router;


//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('movies', { title: 'Search Results movies' });
//});

//module.exports = router;

