var express = require('express');
const movie_controlers= require('../controllers/movies');
var router = express.Router();


// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET movies */
router.get('/', movie_controlers.movie_view_all_Page );

/* GET detail movie page */
router.get('/detail', movie_controlers.movie_view_one_Page);
/* GET create movie page */
router.get('/create',secured, movie_controlers.movie_create_Page);
/* GET create update page */
router.get('/update',secured, movie_controlers.movie_update_Page);
/* GET delete costume page */
router.get('/delete', secured,movie_controlers.movie_delete_Page);

module.exports = router;
//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('movies', { title: 'Search Results movies' });
//});

//module.exports = router;

