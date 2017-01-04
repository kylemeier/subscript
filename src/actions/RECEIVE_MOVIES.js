import moment from 'moment';

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

	const currentDate = moment();
	const cutoffDate = currentDate.clone().subtract(2, 'months');

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
		const releaseDate = moment(movie.release_date);
		return cutoffDate.isSameOrBefore(releaseDate) && releaseDate.isSameOrBefore(currentDate);
	});
}

export {RECEIVE_MOVIES, receiveMovies};