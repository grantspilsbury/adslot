import { createSelector } from 'reselect';
import _get from 'lodash.get';
import _groupBy from 'lodash.groupby';
import { toDollars } from '../../utils/numberUtils';

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

    const bookingsGroupedByProductId = _groupBy(bookings, 'productId');

    return sellers.map(seller => {
      const sellerId = seller.id;
      const sellersProducts = productsGroupedBySellerId[sellerId];
      return (sellersProducts || []).map(product => {
        const productId = product.id;
        const productBookings = bookingsGroupedByProductId[productId];
        return productBookings.map(booking => ({
          id: booking.id.substring(0, 5),
          productName: product.name,
          quantity: booking.quantity.toLocaleString(),
          rate: toDollars(product.rate),
          cost: toDollars(product.rate * (booking.quantity / 1000))
        }));
      });
    });
  }
);

export default groupedBookingsSelector;
