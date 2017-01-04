import {receiveMovies} from './RECEIVE_MOVIES';
import {RECEIVE_MOVIES} from './RECEIVE_MOVIES';
import moment from 'moment';

const data = {
	cast: [],
	crew: []
};

it('should only return movies released in the last two months from cast property', ()=>{

	const recentDate = moment();
	recentDate.subtract(2, 'months').add(1, 'day');

	const recent = {
		id: 'recent',
		release_date: recentDate.format('YYYY-MM-DD')
	};

	const old = {
		id: 'old',
		release_date: '1970-01-01'
	};

	data.cast = [recent, old];
	
	const actualResult = receiveMovies('query', data);
	const expectedResult = {
		query: 'query',
		type: RECEIVE_MOVIES,
		movies: [recent],
		receivedAt: actualResult.receivedAt
	};

	expect(actualResult).toEqual(expectedResult);
});