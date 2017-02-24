import React, { PropTypes } from 'react';
// import { connect } from 'react-redux';

import MovieList from '../containers/MovieList';

import './PersonCard.css';

class PersonCard extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    const {movies, person} = this.props;

    return (
      <div className="PersonCard">
          <p>{person.name}</p>
          <MovieList movies={movies} title="Current" />
      </div>
    );
  }
}

PersonCard.propTypes = {
  // show: PropTypes.bool.isRequired
  movies: PropTypes.array.isRequired,
  person: PropTypes.object.isRequired 
};

PersonCard.defaultProps = {
  movies: [],
  person: {}
};

export default PersonCard;