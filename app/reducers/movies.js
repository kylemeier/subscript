import uuid from 'node-uuid';
import { REQUEST_MOVIES } from '../actions/REQUEST_MOVIES';
import { RECEIVE_MOVIES } from '../actions/RECEIVE_MOVIES';


export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: [],
	}, action){
	
	console.log('movies in reducer', action.movies);
	switch(action.type){
		
		case REQUEST_MOVIES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_MOVIES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.movies,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}


