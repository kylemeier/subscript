import React from 'react';
import {connect} from 'react-redux';
import {fetchPeople} from '../actions/fetchPeople';
import './FindPersonForm.css';

class FindPersonForm extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.input.value.trim()) return;
		this.props.dispatch(fetchPeople(this.input.value));
		this.input.value = '';
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit} className="FindPersonForm">
			<input className="FindPersonForm-input"
				ref={ node=>{ this.input = node }}
			/>
				<button type="submit">
					Find
				</button>
			</form>
		);
	}
}

export default connect()(FindPersonForm);

