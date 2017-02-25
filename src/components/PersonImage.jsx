import React, { PropTypes } from 'react';
import './PersonImage.css';

function PersonImage(props) {
	const {imagePath, size} = props;

	const width = size > 45? 185 : 45; //these two numbers are the two widths allowed by the API

	const style = {
		backgroundImage: 'url("https://image.tmdb.org/t/p/w'+width+'/' + imagePath + '")',
		width: size+'px',
		height: size+'px'
	};

	let el;

	if (imagePath) {
		el =
			<img
				className="PersonImage"
				style={style}
				role="presentation"
			/>;
	}
	else {
		el = <i className="PersonImage material-icons">person</i>;
	}

	return el;
}



PersonImage.propTypes = {
	imagePath: PropTypes.string,
	size: PropTypes.string
};

PersonImage.defaultProps = {
	size: '45'
};

export default PersonImage;
