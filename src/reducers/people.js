import * as ACTIONS from '../constants/ACTIONS_PEOPLE';

export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: []
	}, action){

	switch(action.type){

		case ACTIONS.REQUEST_PEOPLE:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});
		case ACTIONS.RECEIVE_PEOPLE:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.people,
				selectedPersonID: action.people.length === 1? action.people[0].id : null,
				lastUpdated: action.receivedAt
			});
		case ACTIONS.SELECT_PERSON:
			return Object.assign({}, state, {
				selectedPersonID: action.personID
			});
		default:
			return state;
	}
}

