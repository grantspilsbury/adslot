import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookingGroup from '../../components/BookingGroup';
import Spinner from '../../components/Spinner';
import Search from '../../components/Search';

class Bookings extends Component {
  componentDidMount() {
    this.props.fetchBookings();
    this.props.fetchSellers();
    this.props.fetchProducts();
  }

  render() {
    const { sellerNames, isFetching } = this.props;

    if (isFetching) return <Spinner />;

    return (
      <main role="main">
        <div className="container">
          <div className="search-container">
            <h2>Bookings</h2>
            <Search />
          </div>
          {sellerNames.map((sellerName, i) => (
            <BookingGroup key={sellerName} sellerName={sellerName} />
          ))}
        </div>
      </main>
    );
  }
}

Bookings.defaultProps = {
  sellerNames: [],
  isFetching: false,
  fetchBookings: () => {},
  fetchSellers: () => {},
  fetchProducts: () => {}
};

Bookings.propTypes = {
  sellerNames: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchBookings: PropTypes.func,
  fetchSellers: PropTypes.func,
  fetchProducts: PropTypes.func
};

export default Bookings;
