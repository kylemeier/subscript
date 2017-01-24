import { RECEIVE_PEOPLE } from '../constants/ACTIONS_PEOPLE';

export default function (query, json) {

	return {
		query,
		type: RECEIVE_PEOPLE,
		people: json.results,
		receivedAt: Date.now()
	}
}