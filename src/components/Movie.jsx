import React, {PropTypes} from 'react';

import './Movie.css';

function Movie(props){
	const {title, poster, role} = props;

	return(
		<div className="Movie">
			<img className="Movie-poster" src={"https://image.tmdb.org/t/p/w185/"+poster} alt="Poster"/>
			<div className="Movie-titleAndRoleWrapper">
				<h1 className="Movie-title">{title}</h1>
				{role &&
					<h2 className="role" >Role: {role}</h2>
				}
			</div>
			<a className="Movie-showtimeLink" href={"http://www.google.com/search?q="+title+"%20showtimes"} target="_blank">See if its playing near you</a>
		</div>
	);
}

Movie.propTypes = {
	title: PropTypes.string,
	poster: PropTypes.string,
	role: PropTypes.string,
};

export default Movie;