import React from 'react';
import { connect } from 'react-redux';
import fetchPeople from '../actions/fetchPeople';
import fetchMovies from '../actions/fetchMovies';
import PeopleDropDown from './PeopleDropDown';
import './FindPersonForm.css';
import '../utils/material-icons-overrides.css';

class FindPersonForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shouldShowDropDown: true
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.prevInputValue = '';
	}

	componentDidMount() {
		//should be debounced?
		// throttle every half second?
		// const interval = setInterval(()=>{
		// 	this.fetchPeopleFromInput();
		// }, 1000);
	}

	componentWillReceiveProps(nextProps) {
		const nextSelectedPersonID = nextProps.selectedPersonID;
		const currentSelectedPersonID = this.props.selectedPersonID || null;
		if (nextSelectedPersonID && nextSelectedPersonID !== currentSelectedPersonID)
			this.props.dispatch(fetchMovies(nextSelectedPersonID));
	}

	handleInputFocus() {
		this.setState({
			shouldShowDropDown: true
		});
	}

	handleInputBlur() {
		this.setState({
			shouldShowDropDown: false
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.fetchPeopleFromInput();
	}

	fetchPeopleFromInput() {
		const newInputValue = this.input.value.trim();

		if (!newInputValue || this.prevInputValue === newInputValue) return;

		this.props.dispatch(fetchPeople(newInputValue));
		this.prevInputValue = newInputValue;
	}

	render() {
		return (

			<form onSubmit={this.handleSubmit} className="FindPersonForm">
				<div className="FindPersonForm-inputContainer">
					<div className="FindPersonForm-inputDropDownContainer">
						<input
							className="FindPersonForm-input"
							placeholder="Search for a movie cast/crew member..."
							onFocus={this.handleInputFocus}
							onBlur={this.handleInputBlur}
							ref={node => { this.input = node } }
							/>
						{ this.state.shouldShowDropDown && <PeopleDropDown /> }
					</div>
					<button className="FindPersonForm-btn" type="submit">
						<i className="material-icons km-material-icons--flex">search</i>
					</button>
				</div>
			</form>
		);
	}
};

const mapStateToProps = ({people}) => {
	return {
		selectedPersonID: people.selectedPersonID,
	};
};


export default connect(mapStateToProps)(FindPersonForm);

