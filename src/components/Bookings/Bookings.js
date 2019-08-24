import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookingGroup from '../../components/BookingGroup';
import Spinner from '../../components/Spinner';

class Bookings extends Component {
  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchSellers();
    this.props.fetchProducts();
  }

  render() {
    const { groupedBookings, isFetching } = this.props;

    if (isFetching) {
      return <Spinner />;
    }
    return (
      <main role="main">
        <div className="container">
          <h1>Bookings</h1>
          <hr />
          {groupedBookings.map(booking => (
            <BookingGroup booking />
          ))}
        </div>
      </main>
    );
  }
}

Bookings.defaultProps = {
  groupedBookings: [],
  isFetching: false,
  fetchBookings: () => {},
  fetchSellers: () => {},
  fetchProducts: () => {}
};

Bookings.propTypes = {
  groupedBookings: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchBookings: PropTypes.func,
  fetchSellers: PropTypes.func,
  fetchProducts: PropTypes.func
};

export default Bookings;
