import React, {PropTypes} from 'react';

function Movie(props){
	const {title, poster, character, job} = props;

	return(
		<div>
			<h1>{title}</h1>
			<img src={"https://image.tmdb.org/t/p/w185/"+poster} alt="Poster"/>
			{character &&
				<h2>Plays: {character}</h2>
			}
			{job &&
				<h2>{job}</h2>
			}
			<a href={"http://www.google.com/search?q="+title+"%20showtimes"} target="_blank">See if its playing near you</a>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string,
	poster: PropTypes.string,
	character: PropTypes.string,
	job: PropTypes.string,
};

export default Movie;