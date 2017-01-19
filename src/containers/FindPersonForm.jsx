import React from 'react';
import {connect} from 'react-redux';
import fetchPeople from '../actions/fetchPeople';
import fetchMovies from '../actions/fetchMovies';
import PeopleDropDown from './PeopleDropDown';
import './FindPersonForm.css';

class FindPersonForm extends React.Component{

	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.shouldFocusInput = true;
		this.prevInputValue = '';
	}
	
	componentDidMount(){
		//should be debounced
		// const interval = setInterval(()=>{
		// 	this.fetchPeopleFromInput();
		// }, 3000);
	}

	componentWillReceiveProps(nextProps){
		const nextSelectedPersonID = nextProps.selectedPersonID;
		const currentSelectedPersonID = this.props.selectedPersonID || null;
		if(nextSelectedPersonID && nextSelectedPersonID !== currentSelectedPersonID) 
			this.props.dispatch(fetchMovies(nextSelectedPersonID));
	}

	handleSubmit(e){
		e.preventDefault();
		this.fetchPeopleFromInput();
	}

	fetchPeopleFromInput(){
		const newInputValue = this.input.value.trim();

		if(!newInputValue || this.prevInputValue === newInputValue) return;

		this.props.dispatch(fetchPeople(newInputValue));
		this.prevInputValue = newInputValue;
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit} className="FindPersonForm">
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
				<PeopleDropDown />
			</form>
		);
	}
};

const mapStateToProps = ({people})=>{
	return{
		selectedPersonID: people.selectedPersonID,
	};
};


export default connect(mapStateToProps)(FindPersonForm);

