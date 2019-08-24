import { connect } from 'react-redux';
import { groupedBookingsSelector } from '../selectors/groupedBookingsSelector';

const mapStateToProps = (state, ownProps) => {
  const { search } = state;

  // Not happy with this... tired
  const bookings = groupedBookingsSelector(state)
    [ownProps.sellerName].flat()
    .filter(booking =>
      search.term.length < 4
        ? search.term === '' ||
          booking.productName.toLowerCase().startsWith(search.term.toLowerCase())
        : booking.productName.toLowerCase().includes(search.term.toLowerCase())
    );

  return {
    allBookings: bookings
  };
};

export const bookingGroupConnector = connect(mapStateToProps);
