import React from 'react';
import {connect} from 'react-redux';
import './Person.css';
import PersonImage from './PersonImage';

class Person extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		this.props.handleClick(e, this.props.id);
	}

	render(){
		const {name,profilePath} = this.props;	

		
		return(
			<button className="Person" onClick={this.handleClick}>
			<PersonImage imagePath={profilePath} />
			<h1 className="Person-name">{name}</h1>
			
			</button>
		);
	}
}

export default connect()(Person);