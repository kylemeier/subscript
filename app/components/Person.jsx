import React from 'react';
import {connect} from 'react-redux';
import fetchMovies from '../actions/fetchMovies';

class Person extends React.Component{

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
		e.preventDefault();
		this.props.dispatch(fetchMovies(this.props.id));
	}

	render(){
		const {name,profilePath} = this.props;	

		return(
			<button onClick={this.handleClick}>
				<h1>{name}</h1>
			</button>
		);
	}
}

export default connect()(Person);