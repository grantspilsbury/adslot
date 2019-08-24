import React from 'react';
import PropTypes from 'prop-types';

const Booking = ({ id, cost, productName, quantity, rate }) => (
  <tr className="table-success">
    <td>{id}</td>
    <td>{productName}</td>
    <td>{quantity}</td>
    <td>{rate}</td>
    <td>{cost}</td>
  </tr>
);

Booking.propTypes = {
  cost: PropTypes.string,
  id: PropTypes.string,
  productName: PropTypes.string,
  quantity: PropTypes.string,
  rate: PropTypes.string
};

export default Booking;
