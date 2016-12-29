import React from 'react'

function Movie(props){
	const {title, poster} = props;

	return(
		<div>
			<h1>{title}</h1>
			<img src={"https://image.tmdb.org/t/p/w500/"+poster} alt="Poster"/>
		</div>
	)
}

export default Movie