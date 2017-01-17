import requestPeople from './REQUEST_PEOPLE';
import receivePeople from './RECEIVE_PEOPLE';

export default function fetchPeople(query){
	return (dispatch)=>{

		dispatch(requestPeople(query))

		return fetch(`https://api.themoviedb.org/3/search/person?api_key=a3122208a7cf285fa705e6970ef28dbe&language=en-US&query=${query}&page=1&include_adult=false`)
			.then(response => response.json())
			.then(json => dispatch(receivePeople(query,json)))
			.catch( e => console.error(e))
	}
}