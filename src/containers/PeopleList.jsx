import React from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person';
import fetchMovies from '../actions/fetchMovies';

class PeopleList extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}	

	handleClick(e, id){
		e.preventDefault();
		this.props.dispatch(fetchMovies(id));
	}

	componentWillReceiveProps(nextProps){
		if(!nextProps.people.length || nextProps.people.length > 1) return;

		const nextPersonID = nextProps.people[0].id;

		let currentPersonID;

		try{
			currentPersonID = this.props.people[0].id;
		}
		catch(e){
			currentPersonID = null;
		}

		if(nextPersonID !== currentPersonID) this.props.dispatch(fetchMovies(nextPersonID));
	}

	render(){
		if(this.props.people.length > 1){
			return(
				<ul>
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
	
export default connect(mapStateToProps)(PeopleList);
