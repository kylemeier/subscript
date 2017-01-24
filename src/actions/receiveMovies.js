import moment from 'moment';
import {curry} from 'lodash/fp';
import { RECEIVE_MOVIES } from '../constants/ACTIONS_MOVIES';

function receiveMovies(query, json){

	return {
		query,
		type: RECEIVE_MOVIES,
		movies: getCurrentlyPlayingMovies(json.cast.concat(json.crew)),
		receivedAt: Date.now()
	};
}

function getCurrentlyPlayingMovies(movies){
	return combineDuplicates(movies).filter(IsReleasedRecently);
}

function IsReleasedRecently(movie){
	const currentDate = moment();
	const cutoffDate = currentDate.clone().subtract(2, 'months');
	const releaseDate = moment(movie.release_date);
	return cutoffDate.isSameOrBefore(releaseDate) && releaseDate.isSameOrBefore(currentDate);
}

function combineDuplicates(movies){
	
	const combineJobAndCharacterPropValues = curry(combinePropValues)(['job', 'character']);

	return movies.reduce( (result, movie)=>{

		const existingMovieIndex = result.findIndex( item => item.id === movie.id );

		if(existingMovieIndex === -1){
			result.push(movie);
		}
		else{
			result[existingMovieIndex] = combineJobAndCharacterPropValues(
				result[existingMovieIndex],
				movie,
			);
		}

		return result;
	},[]);
}


function combinePropValues(propsToCombine, currentObj, newObj){
	const clone = Object.assign({}, currentObj);
	const combineAPropValueWithNewObj = curry(combineAPropValue)(newObj);
	return propsToCombine.reduce(combineAPropValueWithNewObj, clone);
}

function combineAPropValue(newObj, result, prop){
		const currentValue = result[prop];
		const newValue = newObj[prop];
		if(newValue) result[prop] = currentValue? currentValue+'/'+newValue : newValue;
		return result;
}

export default receiveMovies;