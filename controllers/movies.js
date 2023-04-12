var Movie = require('../models/movies');
// List of all Movies
exports.movie_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie list');
};
// for a specific Movie.
exports.movie_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
};
// Handle Movie create on POST.
exports.movie_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie create POST');
};
// Handle Movie delete form on DELETE.
exports.movie_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id);
};
// Handle Movie update form on PUT.
exports.movie_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id);
};