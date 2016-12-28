export const REQUEST_MOVIES = 'REQUEST_MOVIES'

export function requestMovies(query){
	return {
		type: REQUEST_MOVIES,
		query
	}
}