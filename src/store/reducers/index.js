/* istanbul ignore file */
import { combineReducers } from 'redux';
import bookings from './bookingsReducer';
import sellers from './sellerReducer';
import products from './productReducer';
import search from './searchReducer';

export default combineReducers({
  bookings,
  sellers,
  products,
  search
});
