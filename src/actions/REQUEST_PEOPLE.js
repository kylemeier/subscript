export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'

export function requestPeople(query){
	return {
		type: REQUEST_PEOPLE,
		query
	}
}