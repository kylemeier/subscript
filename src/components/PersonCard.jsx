import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import MovieList from '../containers/MovieList';

import './PersonCard.css';

class PersonCard extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentWillUnmount(){
    console.log('unmounting!');
  }

  render() {

    const {movies} = this.props;
    // if (!movies.length) return null;

    return (

      <div>
        <ReactCSSTransitionGroup
          transitionName="PersonCard-slideUp"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
          transitionAppear={true}
          transitionAppearTimeout={200}
        >
          {movies.length && 
          <div key="1" className="PersonCard">
            <MovieList movies={movies} title="Current" />
          </div>
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

PersonCard.propTypes = {
  // show: PropTypes.bool.isRequired
  movies: PropTypes.array.isRequired
};

const mapStateToProps = ({movies}) => {
  return {
    movies: movies.items
  };
};

export default connect(mapStateToProps)(PersonCard);