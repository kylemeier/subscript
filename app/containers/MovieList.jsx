import React from 'react'
import { connect } from 'react-redux'
import Movie from '../components/Movie'

let MovieList = ({movies})=>{
	return(
		<ul>
			{movies.map(movie=>
				<Movie
					key={movie.id}		
					title={movie.title}
					poster={movie.poster} />
			)}
		</ul>
	);
}

const mapStateToProps = ({movies})=>{
	return{
		movies: movies
	}
}

MovieList = connect(mapStateToProps)(MovieList)

export default MovieList