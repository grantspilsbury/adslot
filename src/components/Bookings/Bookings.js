import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookingGroup from '../../components/BookingGroup';

class Bookings extends Component {
  render() {
    return (
      <main role="main">
        <div className="container">
          <h1>Bookings</h1>
          <hr />
          <BookingGroup />
        </div>
      </main>
    );
  }
}

Bookings.defaultProps = {
  bookings: [],
  isFetching: false
};

Bookings.propTypes = {
  bookings: PropTypes.array,
  isFetching: PropTypes.bool
};

export default Bookings;
