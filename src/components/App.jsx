import React from 'react';
import 'normalize.css/normalize.css';
import '../utils/defaults.css';
import Header from '../components/Header';
import FindPersonForm from '../containers/FindPersonForm';
import PersonCardWrapper from '../containers/PersonCardWrapper';
import './App.css';

const App = () => (
	<div className="App">
		<Header />
		<FindPersonForm />
		<PersonCardWrapper />
	</div>
);

export default App;