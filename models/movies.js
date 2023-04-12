const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
movie_name: String,
MovieDirector: String,
MovieTiming: Number
})
module.exports = mongoose.model("movies",
movieSchema)