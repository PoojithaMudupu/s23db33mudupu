var Movie = require('../models/movies');
// List of all Movie
exports.movie_list = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Movie list');
 try{
    theMovie = await Movie.find();
    res.send(theMovie);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific Movie.
exports.movie_detail = async function(req, res) {
 res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
 
};
// Handle Movie create on POST.
exports.movie_create_post = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Movie create POST');
 console.log(req.body)
 let document = new Movie();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.movie_name = req.body.movie_name;
 document.movie_director = req.body.movie_director;
 document.movie_timing = req.body.movie_timing;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};
// Handle Movie delete form on DELETE.
exports.movie_delete = async function(req, res) {
 res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id);

};
// Handle Movie update form on PUT.
exports.movie_update_put = async function(req, res) {
 res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id);

};
// VIEWS
// Handle a show all view
exports.movie_view_all_Page = async function(req, res) {
    try{
    theMovie = await Movie.find();
    res.render('movies', { title: 'Movie Search Results', results: theMovie });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };