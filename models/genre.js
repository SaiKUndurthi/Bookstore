var mongoose = require('mongoose');

// Schema
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);
// Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}

//Add Gener
module.exports.addGenre = (genre,callback) => {
	Genre.create(genre, callback);
}