import * as ACTIONS from '../constants/ACTIONS_PEOPLE';

export default function(
	state = {
		isFetching: false,
		didInvalidate: false,
		items: [],
		selectedPerson: {}
	}, action){

	console.log('people action', action);

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
				selectedPerson: action.people.length === 1? action.people[0] : {},
				lastUpdated: action.receivedAt
			});
		case ACTIONS.SELECT_PERSON:
			return Object.assign({}, state, {
				selectedPerson: action.person
			});
		default:
			return state;
	}
}

