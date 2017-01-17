import {REQUEST_MOVIES} from '../actions/REQUEST_MOVIES';
import {RECEIVE_MOVIES} from '../actions/RECEIVE_MOVIES';
import {REQUEST_PEOPLE} from '../constants/ACTIONS_PEOPLE';


export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: [],
	}, action){
	
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
		case REQUEST_PEOPLE:
			return Object.assign({},{
				isFetching: false,
				didInvalidate: false,
				items: [],
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}


