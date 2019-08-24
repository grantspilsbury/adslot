import { createSelector } from 'reselect';
import lodashGet from 'lodash.get';
import lodashGroupBy from 'lodash.groupby';

const bookingsSelector = state => lodashGet(state, 'bookings.items');
const sellersSelector = state => lodashGet(state, 'sellers.items');

export const groupedBookingsSelector = createSelector(
  bookingsSelector,
  sellersSelector,
  (bookings, sellers) => {
    if (!bookings.length || !sellers.length) return [];
    console.log('bookings', bookings);
    console.log('sellers', sellers);
    // group by by id
    // return map id to seller name
  }
);

export default groupedBookingsSelector;
