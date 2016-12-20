import uuid from 'node-uuid';
import { ADD_MOVIE } from '../actions/MovieActions';


export default function(state = [], action){
	console.log(state, action);
	switch(action.type){

		case ADD_MOVIE:
			return [
				...state,
				{
					id: uuid.v4(),
					title: action.text
				}
			]
		default:
			return state;
	}
}

