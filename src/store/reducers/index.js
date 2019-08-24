/* istanbul ignore file */
import { combineReducers } from 'redux';
import bookings from './bookingsReducer';
import sellers from './sellerReducer';

export default combineReducers({
  bookings,
  sellers
});
