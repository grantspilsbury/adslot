import { createSelector } from 'reselect';
import lodashGet from 'lodash.get';

const bookingsSelector = state => lodashGet(state, 'bookings.items');
const sellersSelector = state => lodashGet(state, 'sellers');

export const groupedBookingsSelector = createSelector(
  bookingsSelector,
  sellersSelector,
  (items, sellers) => {
    // group by by id
    // return map id to seller name
  }
);

export default groupedBookingsSelector;
