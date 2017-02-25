import React, { PropTypes } from 'react';
import MovieList from '../containers/MovieList';
import PersonImage from '../components/PersonImage';
import './PersonCard.css';

function PersonCard(props) {
  const {movies, person} = props;

  return (
    <div className="PersonCard">
      <PersonImage imagePath={person.profile_path} size="100"/>
      <p>{person.name}</p>
      <MovieList movies={movies} title="Current" />
    </div>
  );
}

PersonCard.propTypes = {
  movies: PropTypes.array.isRequired,
  person: PropTypes.object.isRequired
};

PersonCard.defaultProps = {
  movies: [],
  person: {}
};

export default PersonCard;