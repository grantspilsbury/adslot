import { createSelector } from 'reselect';
import _get from 'lodash.get';
import _groupBy from 'lodash.groupby';
import _sortBy from 'lodash.sortby';
import { groupBookings } from '../../utils/bookingUtils';

const bookingsSelector = state => _get(state, 'bookings.items');
const sellersSelector = state => _get(state, 'sellers.items');
const productsSelector = state => _get(state, 'products.items');

export const groupedBookingsSelector = createSelector(
  bookingsSelector,
  sellersSelector,
  productsSelector,
  (bookings, sellers, products) => {
    if (!bookings.length || !sellers.length || !products.length) return [];

    const productsGroupedBySellerId = _groupBy(products, 'sellerId');
    const sortedBookings = _sortBy(bookings, 'startDate');
    const bookingsGroupedByProductId = _groupBy(sortedBookings, 'productId');

    return sellers.reduce((memo, seller) => {
      const groupedBookings = groupBookings(
        productsGroupedBySellerId[seller.id],
        bookingsGroupedByProductId
      );
      return { ...memo, [seller.name]: groupedBookings };
    }, {});
  }
);

export default groupedBookingsSelector;
