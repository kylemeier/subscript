export const REQUEST_MOVIES = 'REQUEST_MOVIES'

export function requestMovies(query){
	return {
		query,
		type: REQUEST_MOVIES,
	}
}