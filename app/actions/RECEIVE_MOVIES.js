const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function receiveMovies(query, json){

	return {
		query,
		type: RECEIVE_MOVIES,
		//temp, want cast and crew
		movies: getCurrentlyPlayingMovies({
			inCast: json.cast,
			inCrew: json.crew
			}),
		receivedAt: Date.now()
	};
}

function getCurrentlyPlayingMovies({inCast, inCrew}){

	const currentDate = new Date().getTime();
	const cutoffDate = currentDate - 2629746000; //1 month in ms

	return getMoviesReleasedBetween({
			currentDate, 
			cutoffDate, 
			movies: inCast
		})
		.concat(
			getMoviesReleasedBetween({
				currentDate, 
				cutoffDate, 
				movies: inCrew
			}));
}

function getMoviesReleasedBetween({currentDate, cutoffDate, movies}){	
	return movies.filter( movie=>{
		const releaseDate = new Date(movie.release_date).getTime();
		return cutoffDate <= releaseDate && releaseDate <= currentDate;
	});
}

export {RECEIVE_MOVIES, receiveMovies};