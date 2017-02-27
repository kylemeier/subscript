import React, { PropTypes } from 'react';
import Movie from '../components/Movie';

import './MovieList.css';

function MovieList(props) {

	const {movies, title} = props;

	return (
		<div className="MovieList">
			<p>{title}</p>
			<ul>
				{movies.map(movie =>
					<Movie
						key={movie.id}
						title={movie.title}
						role={movie.role}
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