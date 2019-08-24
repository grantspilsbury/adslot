import { toDollars } from './numberUtils';
import { formatId } from './stringUtils';

const formatBooking = (id, name, quantity, rate) => ({
  id: formatId(id),
  productName: name,
  quantity: quantity.toLocaleString(),
  rate: toDollars(rate),
  cost: toDollars(rate * (quantity / 1000))
});

export const groupBookings = (sellersProducts = [], bookingsGroupedByProductId) =>
  sellersProducts.map(product =>
    bookingsGroupedByProductId[product.id].map(booking =>
      formatBooking(booking.id, product.name, booking.quantity, product.rate)
    )
  );
