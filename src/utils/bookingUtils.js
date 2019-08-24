import { toDollars } from './numberUtils';
import { formatId } from './stringUtils';
import moment from 'moment';

const formatBooking = (booking, product) => ({
  id: formatId(booking.id),
  productName: product.name,
  quantity: booking.quantity.toLocaleString(),
  rate: toDollars(product.rate),
  cost: toDollars(product.rate * (booking.quantity / 1000)),
  isActive: moment().isBetween(moment(booking.startDate), moment(booking.endDate))
});

export const groupBookings = (sellersProducts = [], bookingsGroupedByProductId) =>
  sellersProducts.map(product =>
    bookingsGroupedByProductId[product.id].map(booking => formatBooking(booking, product))
  );
