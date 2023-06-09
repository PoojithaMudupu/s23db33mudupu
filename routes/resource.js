var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var movie_controller = require('../controllers/movies');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// movie ROUTES ///
// POST request for creating a movie.
router.post('/movies', movie_controller.movie_create_post);
// DELETE request to delete movie.
router.delete('/movies/:id', movie_controller.movie_delete);
// PUT request to update movie.
router.put('/movies/:id', movie_controller.movie_update_put);
// GET request for one movie.
router.get('/movies/:id', movie_controller.movie_detail);
// GET request for list of all movie items.
router.get('/movies', movie_controller.movie_list);

module.exports = router;