import React from 'react';
import Person from './Person';
import './PeopleDropDown.css';

function PeopleDropDown(props) {

	const {people, handleClick} = props;

	return (
		<ul className="PeopleDropDown">
			{people.map(person =>
				<Person
					key={person.id}
					id={person.id}
					name={person.name}
					profilePath={person.profile_path}
					handleClick={handleClick}
				/>
			)}
		</ul>
	);
}

export default PeopleDropDown;
