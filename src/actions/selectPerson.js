import { SELECT_PERSON } from '../constants/ACTIONS_PEOPLE';

export default function (personID) {
	return {
		type: SELECT_PERSON,
		personID
	}
}