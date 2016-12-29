export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export function receiveMovies(query, json){

	return {
		query,
		type: RECEIVE_MOVIES,
		//temp, want cast and crew
		movies: getCurrentlyPlayingMovies(json.cast),
		receivedAt: Date.now()
	};
}

function getCurrentlyPlayingMovies(movies){
	
	const currentDate = new Date().getTime();
	const cutoffDate = currentDate - 2629746000; //1 month in ms

	return movies.filter( movie=>{
		const releaseDate = new Date(movie.release_date).getTime();
		return cutoffDate <= releaseDate && releaseDate <= currentDate;
	})
}