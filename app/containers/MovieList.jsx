import React from 'react';
import {connect} from 'react-redux';
import Movie from '../components/Movie';

let MovieList = ({movies})=>{
	
	return(
		<ul>
			{movies.map(movie=>
				<Movie
					key={movie.id+movie.character}		
					title={movie.title}
					poster={movie.poster_path} />
			)}
		</ul>
	);
}

const mapStateToProps = ({movies})=>{
	return{
		movies: movies.items
	};
}

MovieList = connect(mapStateToProps)(MovieList);

export default MovieList;