import {REQUEST_PEOPLE} from '../constants/ACTIONS_PEOPLE';

export default function(query){
	return {
		type: REQUEST_PEOPLE,
		query
	}
}