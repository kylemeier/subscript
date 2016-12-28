import React from 'react'
import FindPersonForm from './FindPersonForm'
import MovieList from '../containers/MovieList'
import PeopleList from '../containers/PeopleList'

const App = () => (
	<div> 
		<FindPersonForm />
		<h1>People:</h1>
		<PeopleList />
		<h1>Movies:</h1>
		<MovieList />
	</div>
)

export default App