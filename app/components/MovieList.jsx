import React from 'react'

function MovieList({movies}){
	return(
		<ul>
			{movies.map( movie=>
				<Movie
					key={movie.id}		
					title={movie.title}
					poster={movie.poster} />
			)}
		</ul>
	);
}

export default MovieList