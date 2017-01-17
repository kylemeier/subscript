import React from 'react';
import 'normalize.css/normalize.css';
import '../utils/defaults.css';
import FindPersonForm from './FindPersonForm';
import MovieList from '../containers/MovieList';
import PeopleDropDown from '../containers/PeopleDropDown';
import './App.css';

const App = () => (
	<div className="App"> 
		<FindPersonForm />
		<PeopleDropDown />
		<MovieList />
	</div>
);

export default App;