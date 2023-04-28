const mongoose = require("mongoose")
const movieSchema = mongoose.Schema({
movie_name: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
movie_director: String,
movie_timing:{
    type:Number,
    min: 1,
    max: 24 }
})
module.exports = mongoose.model("movies",
movieSchema)