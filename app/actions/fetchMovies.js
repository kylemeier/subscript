import {requestMovies} from './REQUEST_MOVIES'
import {receiveMovies} from './RECEIVE_MOVIES'

export function fetchMovies(query){
	return (dispatch)=>{

		dispatch(requestMovies(query))

		return fetch(`https://api.themoviedb.org/3/search/person?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&query=${query}&page=1&include_adult=false`)
			.then(response => response.json())
			.then(json => dispatch(receiveMovies(query,json)))
			.catch( e => console.error(e))
	}
}