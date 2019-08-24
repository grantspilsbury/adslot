import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBookings } from '../actions/bookingsActions';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBookings
    },
    dispatch
  );

const mapStateToProps = ({ bookings }) => {
  return {
    bookings: bookings.items,
    isFetching: bookings.isFetching
  };
};

export const bookingsConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
