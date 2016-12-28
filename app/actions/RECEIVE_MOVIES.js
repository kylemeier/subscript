export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export function receiveMovies(query, json){
	console.log('receive moives', json);
	return {
		query,
		type: RECEIVE_MOVIES,
		//temp, want cast and crew
		movies: json.cast,
		receivedAt: Date.now()
	}
}