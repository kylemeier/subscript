import uuid from 'node-uuid';
import { ADD_MOVIE } from '../actions/MovieActions';


export default function(state = [], action){

	switch(action.type){

		case ADD_MOVIE:
			return [
				...state,
				{
					id: uuid.v4(),
					title: action.text,
					poster: 'poster.jpg'
				}
			]
		default:
			return state;
	}
}

