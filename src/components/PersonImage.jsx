import React, {PropTypes} from 'react';
import './PersonImage.css';

function PersonImage(props){
	const {imagePath} = props;

	let el;

		if(imagePath){
			el = 
			<img 
				className="Person-image"
				src={"https://image.tmdb.org/t/p/w45/"+imagePath} 
				alt="Headshot" 
			/>;
		}
		else{
			el = <i className="Person-image material-icons">person</i>;
		}

	return(el);
}

PersonImage.propTypes = {
	imagePath: PropTypes.string
};

export default PersonImage;
