import React from 'react';
import { connect } from 'react-redux';
import { debounce, throttle } from 'lodash';
import fetchPeople from '../actions/fetchPeople';
import fetchMovies from '../actions/fetchMovies';
import selectPerson from '../actions/selectPerson';
import PeopleDropDown from '../components/PeopleDropDown';
import './FindPersonForm.css';
import '../utils/material-icons-overrides.css';

class FindPersonForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isInputFocused: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePersonSelected = this.handlePersonSelected.bind(this);
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.dropDownShouldShow = this.dropDownShouldShow.bind(this);
		this.fetchPeopleFromInput = this.fetchPeopleFromInput.bind(this);
		this.prevInputValue = '';
	}

	componentWillReceiveProps(nextProps) {
		const nextSelectedPersonID = nextProps.selectedPersonID;
		const currentSelectedPersonID = this.props.selectedPersonID || null;
		if (nextSelectedPersonID && nextSelectedPersonID !== currentSelectedPersonID)
			this.props.dispatch(fetchMovies(nextSelectedPersonID));
	}

	handleInputFocus() {
		this.setState({
			isInputFocused: true
		});
	}

	handleInputBlur() {
		this.setState({
			isInputFocused: false
		});
	}

	handleSubmit(e, id) {
		e.preventDefault();
		this.fetchPeopleFromInput();
	}

	handlePersonSelected(e, id) {
		this.props.dispatch(selectPerson(id));
	}

	dropDownShouldShow() {
		return this.state.isInputFocused &&
			this.props.people.length > 1 &&
			this.input.value.trim().length > 0;
	}

	fetchPeopleFromInput() {
		console.log('fetching', Date.now());
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
							onKeyDown={debounce(this.fetchPeopleFromInput, 500, { maxWait: 1000 })}
							autoFocus
							ref={node => { this.input = node } }
							/>
						{this.dropDownShouldShow() &&
							<PeopleDropDown
								handleClick={this.handlePersonSelected}
								people={this.props.people}
								/>
						}
					</div>
					<button className="FindPersonForm-btn" type="submit">
						<i className="material-icons flex">search</i>
					</button>
				</div>
			</form>
		);
	}
};

const mapStateToProps = ({people}) => {
	return {
		selectedPersonID: people.selectedPersonID,
		people: people.items
	};
};

export default connect(mapStateToProps)(FindPersonForm);

