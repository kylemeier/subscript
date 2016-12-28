export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE'

export function receivePeople(query, json){
	
	return {
		query,
		type: RECEIVE_PEOPLE,
		people: json.results,
		receivedAt: Date.now()
	}
}