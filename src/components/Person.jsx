import React from 'react';
import {connect} from 'react-redux';
import './Person.css';

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
		let personImage;

		if(profilePath){
			personImage = <img src={"https://image.tmdb.org/t/p/w185/"+profilePath} alt="Headshot" />;
		}
		else{
			personImage = <i className="material-icons">person</i>;
		}
		
		return(
			<button className="Person" onClick={this.handleClick}>
			{personImage}
			<h1>{name}</h1>
			</button>
		);
	}
}


export default connect()(Person);