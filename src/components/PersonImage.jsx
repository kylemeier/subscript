import React, {PropTypes} from 'react';
import './PersonImage.css';

function PersonImage(props){
	const {imagePath} = props;
	const style = {
		backgroundImage: 'url("https://image.tmdb.org/t/p/w45/'+imagePath+'")',
	};
console.log(style);
	let el;
// src={"https://image.tmdb.org/t/p/w45/"+imagePath} 
		if(imagePath){
			el = 
			<img 
				className="PersonImage"
				style={style}
				role="presentation"
			/>;
		}
		else{
			el = <i className="PersonImage material-icons">person</i>;
		}

	return(el);
}

PersonImage.propTypes = {
	imagePath: PropTypes.string
};

export default PersonImage;
