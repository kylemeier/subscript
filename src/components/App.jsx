import React from 'react';
import 'normalize.css/normalize.css';
import '../utils/defaults.css';
import Header from '../components/Header';
import FindPersonForm from '../containers/FindPersonForm';
import PersonCard from '../components/PersonCard';
import './App.css';

const App = () => (
	<div className="App">
		<Header />
		<FindPersonForm />
		<PersonCard />
	</div>
);

export default App;