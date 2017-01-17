import React from 'react';
import {connect} from 'react-redux';
import fetchPeople from '../actions/fetchPeople';
import fetchMovies from '../actions/fetchMovies';
import './FindPersonForm.css';

class FindPersonForm extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.shouldFocusInput = true;
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.input.value.trim()) return;
		this.props.dispatch(fetchPeople(this.input.value));
		//not working
		this.shouldFocusInput = false;
	}

	componentWillReceiveProps(nextProps){
		const nextSelectedPersonID = nextProps.selectedPersonID;
		const currentSelectedPersonID = this.props.selectedPersonID || null;
		if(nextSelectedPersonID && nextSelectedPersonID !== currentSelectedPersonID) 
			this.props.dispatch(fetchMovies(nextSelectedPersonID));
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit} className="FindPersonForm">
			<h1 className="FindPersonForm-title">Welcome to Subscript</h1>
			<div className="FindPersonForm-inputContainer">
				<input 
					className="FindPersonForm-input"
					placeholder="Search for a movie cast/crew member..."
					autoFocus={this.shouldFocusInput}
					ref={ node=>{ this.input = node }}
				/>
					<button className="FindPersonForm-btn" type="submit">
						<i className="material-icons">search</i>
					</button>
				</div>
			</form>
		);
	}
};

const mapStateToProps = ({people})=>{
	return{
		selectedPersonID: people.selectedPersonID,
		// people: people.items
	};
};


export default connect(mapStateToProps)(FindPersonForm);

