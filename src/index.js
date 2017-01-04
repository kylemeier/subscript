import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

let store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);