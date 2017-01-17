import React from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person';
import selectPerson from '../actions/selectPerson';
import './PeopleDropDown.css';

class PeopleDropDown extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}	

	handleClick(e, id){
		e.preventDefault();
		this.props.dispatch(selectPerson(id));
	}

	render(){
		if(this.props.people.length > 1){
			return(
				<ul className="PeopleDropDown">
					{this.props.people.map(person=>
						<Person
							key={person.id}
							id={person.id}
							name={person.name}
							profilePath={person.profile_path} 
							handleClick={this.handleClick}
						/>
					)}
				</ul>
			)
		}
		else{
			return null;
		}
	}
};

const mapStateToProps = ({people})=>{
	return{
		people: people.items
	};
};
	
export default connect(mapStateToProps)(PeopleDropDown);
