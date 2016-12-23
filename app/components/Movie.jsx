import React from 'react'

function Movie(props){
	const {title, poster} = props;

	return(
		<div>
			<h1>{title}</h1>
			<h2>{poster}</h2>
		</div>
	)
}