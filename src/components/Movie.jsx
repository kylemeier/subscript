import React from 'react';

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

export default Movie;