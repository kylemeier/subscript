export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export function receiveMovies(query, json){
	
	return {
		query,
		type: RECEIVE_MOVIES,
		movies: json.results,
		receivedAt: Date.now()
	}
}