import React from 'react'
import {connect} from 'react-redux'
import Person from '../components/Person'

let PeopleList = ({people})=>{
	
	return(
		<ul>
			{people.map(person=>
				<Person
					key={person.id}
					name={person.name}
					profilePath={person.profile_path} />
			)}
		</ul>
	);
}

const mapStateToProps = ({people})=>{
	return{
		people: people.items
	}
}

PeopleList = connect(mapStateToProps)(PeopleList)
	
export default PeopleList
