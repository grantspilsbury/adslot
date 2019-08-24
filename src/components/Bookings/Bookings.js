import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Booking from '../../components/Booking';
import Spinner from '../../components/Spinner';

class Bookings extends Component {
  componentDidMount() {
    this.props.fetchBookings();
  }

  componentDidUpdate() {
    this.props.fetchBookings();
  }

  render() {
    const { bookings, isFetching } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    return (
      <main role="main">
        <div className="container">
          <h1>Bookings</h1>
          <hr />
          {bookings.map(booking => (
            <Booking quantity />
          ))}
        </div>
      </main>
    );
  }
}

Bookings.defaultProps = {
  bookings: [],
  isFetching: false,
  fetchBookings: () => {}
};

Bookings.propTypes = {
  bookings: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchBookings: PropTypes.func
};

export default Bookings;
