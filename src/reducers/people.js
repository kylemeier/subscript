import { REQUEST_PEOPLE } from '../actions/REQUEST_PEOPLE';
import { RECEIVE_PEOPLE } from '../actions/RECEIVE_PEOPLE';


export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: []
	}, action){

	switch(action.type){

		case REQUEST_PEOPLE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_PEOPLE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.people,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}

