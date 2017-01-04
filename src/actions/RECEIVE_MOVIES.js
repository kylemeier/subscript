const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function receiveMovies(query, json){

	return {
		query,
		type: RECEIVE_MOVIES,
		movies: getCurrentlyPlayingMovies({
			inCast: json.cast,
			inCrew: json.crew
			}),
		receivedAt: Date.now()
	};
}
//same movie will show multiple times if actor is playing multiple characters
//or crew member has multiple jobs. need to check for matching IDs and combine character/job
//look up normalizr and see if i should be using  it here
function getCurrentlyPlayingMovies({inCast, inCrew}){

	const currentDate = new Date().getTime();
	const cutoffDate = currentDate - 5259492000; //2 months in ms

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