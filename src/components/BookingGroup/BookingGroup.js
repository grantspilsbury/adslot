import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Booking from '../../components/Booking';

const renderEmpty = () => (
  <thead className="thead-light">
    <tr>
      <th>No active bookings</th>
    </tr>
  </thead>
);

const renderBookings = allBookings => {
  return (
    <Fragment>
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {allBookings.map(booking => (
          <Booking
            cost={booking.cost}
            id={booking.id}
            productName={booking.productName}
            quantity={booking.quantity}
            rate={booking.rate}
          />
        ))}
      </tbody>
    </Fragment>
  );
};

const BookingGroup = ({ allBookings, sellerName }) => (
  <section>
    <h3>{sellerName}</h3>
    <div className="table-responsive">
      <table className="table table-bordered">
        {!allBookings.length ? renderEmpty() : renderBookings(allBookings)}
      </table>
    </div>
  </section>
);

BookingGroup.propTypes = {
  allBookings: PropTypes.array,
  sellerName: PropTypes.string
};

export default BookingGroup;
