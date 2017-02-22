import React, {PropTypes} from 'react';
import './Person.css';
import PersonImage from './PersonImage';

class Person extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleClick(e, this.props.id);
	}

	render() {
		const {name, profilePath} = this.props;

		return (
			// onMouseDown rather than onClick to ensure it emits 
			// before anything that would remove this element (like onBlur)
			<button className="Person" onMouseDown={this.handleClick}>
				<PersonImage imagePath={profilePath} />
				<h1 className="Person-name">{name}</h1>
			</button>
		);
	}
};

Person.propTypes = {
	name: PropTypes.string,
	profilePath: PropTypes.string
};

export default Person;