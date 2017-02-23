import React, { PropTypes } from 'react';
import Movie from '../components/Movie';

function MovieList(props) {

	const {movies, title} = props;

	return (
		<div>
			<p>{title}</p>
			<ul>
				{movies.map(movie =>
					<Movie
						key={movie.id}
						title={movie.title}
						character={movie.character}
						job={movie.job}
						poster={movie.poster_path} />
				)}
			</ul>
		</div>
	);
};

MovieList.propTypes = {
	movies: PropTypes.array,
	title: PropTypes.string.isRequired
};

export default MovieList;