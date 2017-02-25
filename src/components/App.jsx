import React from 'react';
import 'normalize.css/normalize.css';
import '../utils/defaults.css';
import Header from '../components/Header';
import FindPersonForm from '../containers/FindPersonForm';
import PersonCardWrapper from '../containers/PersonCardWrapper';
import FindPersonFormAndResultsWrapper from '../components/FindPersonFormAndResultsWrapper';
import './App.css';

const App = () => (
	<div className="App">
		<Header />
		<FindPersonFormAndResultsWrapper>
			<FindPersonForm />
			<PersonCardWrapper />
		</FindPersonFormAndResultsWrapper>
	</div>
);

export default App;