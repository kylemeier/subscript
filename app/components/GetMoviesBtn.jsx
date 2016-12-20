import React from 'react'
import { addMovie } from '../actions/MovieActions'
import { connect } from 'react-redux'

let GetMoviesBtn = ({dispatch})=>{

	return(
		<button onClick={e=> dispatch(addMovie('Arrival'))}>
			Get Movies
		</button>
	)

}

GetMoviesBtn = connect()(GetMoviesBtn)

export default GetMoviesBtn