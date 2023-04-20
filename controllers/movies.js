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
//exports.movie_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
 
//};
// for a specific Costume.
exports.movie_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Movie.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//exports.movie_delete = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id);

//};
// Handle Costume delete on DELETE.
exports.movie_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Movie.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Movie update form on PUT.
//exports.movie_update_put = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id);

//};
// Handle Costume update form on PUT.
exports.movie_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Movie.findById( req.params.id)
 // Do updates of properties
 if(req.body.movie_name)
 toUpdate.movie_name = req.body.movie_name;
 if(req.body.movie_director) toUpdate.movie_director = req.body.movie_director;
 if(req.body.movie_timing) toUpdate.movie_timing = req.body.movie_timing;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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

   // Handle a show one view with id specified by query
exports.movie_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Movie.findById( req.query.id)
    res.render('moviedetail',
   { title: 'Movie Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.movie_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('moviecreate', { title: 'Movie Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for updating a costume.
// query provides the id
exports.movie_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Movie.findById(req.query.id)
    res.render('movieupdate', { title: 'Movie Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.movie_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Movie.findById(req.query.id)
    res.render('moviedelete', { title: 'movie Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };