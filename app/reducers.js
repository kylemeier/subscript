import uuid from 'node-uuid';
import { combineReducers } from 'redux';
import { ADD_MOVIE } from './actions/MovieActions';


const initialState = {
	movies: []
};

function movies(state = [], action){

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

const reducers = combineReducers({
	movies
});

export default reducers;

