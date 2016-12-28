import React from 'react'

function Person(props){
	const {name,profilePath} = props;
	
	return(
		<div>
			<h1>{name}</h1>
		</div>
	)
}

export default Person