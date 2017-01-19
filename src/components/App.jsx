import React from 'react';
import 'normalize.css/normalize.css';
import '../utils/defaults.css';
import Header from '../components/Header';
import FindPersonForm from '../containers/FindPersonForm';
import MovieList from '../containers/MovieList';
import PeopleDropDown from '../containers/PeopleDropDown';
import './App.css';

const App = () => (
	<div className="App"> 
		<Header />
		<FindPersonForm />
		<MovieList />
	</div>
);

export default App;