const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
movie_name: String,
movie_director: String,
movie_timing: Number
})
module.exports = mongoose.model("movies",
movieSchema)