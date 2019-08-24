import { compose } from 'recompose';
import { connect } from 'react-redux';
import { groupedBookingsSelector } from '../selectors/groupedBookingsSelector';

const mapStateToProps = (state, ownProps) => ({
  allBookings: groupedBookingsSelector(state)[ownProps.sellerName].flat()
});

export const bookingGroupConnector = connect(mapStateToProps);
