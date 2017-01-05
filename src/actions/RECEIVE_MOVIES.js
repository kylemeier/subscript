import moment from 'moment';

const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

function receiveMovies(query, json){

	return {
		query,
		type: RECEIVE_MOVIES,
		movies: getCurrentlyPlayingMovies({
			inCast: json.cast,
			inCrew: json.crew
		}),
		receivedAt: Date.now()
	};
}

function getCurrentlyPlayingMovies({inCast, inCrew}){

	const currentDate = moment();
	const cutoffDate = currentDate.clone().subtract(2, 'months');
	let movies = inCast.concat(inCrew);

	movies = hasDuplicates(movies)? combineDuplicates(movies) : movies;

	return movies.filter( movie=>{
		const releaseDate = moment(movie.release_date);
		return cutoffDate.isSameOrBefore(releaseDate) && releaseDate.isSameOrBefore(currentDate);
	});
}

function hasDuplicates(items){

	const itemIDs = {};

	for (let i = items.length - 1; i >= 0; i--) {
		const item = items[i];
		if(itemIDs[item.id]) return true;
		itemIDs[item.id] = true;
	}
	return false;
}


function combineDuplicates(movies){

	return movies.reduce( (result, movie)=>{

		const existingMovieIndex = result.findIndex( item => item.id === movie.id );

		if(existingMovieIndex === -1){
			result.push(movie);
		}
		else{
			result[existingMovieIndex] = combinePropValues({
				currentObj: result[existingMovieIndex],
				newObj:  movie,
				propsToCombine: ['job', 'character']
			});
		}

		return result;
	},[]);
}

function combinePropValues({currentObj, newObj, propsToCombine}){
	
	const clone = Object.assign({}, currentObj);

	return propsToCombine.reduce( (result, prop) =>{

		const currentValue = result[prop];
		const newValue = newObj[prop];

		if(newValue) result[prop] = currentValue? currentValue+'/'+newValue : newValue;
		return result;
	}, clone);
}


export {RECEIVE_MOVIES, receiveMovies};