import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBookings } from '../actions/bookingsActions';
import { fetchSellers } from '../actions/sellerActions';
import { fetchProducts } from '../actions/productActions';
import { groupedBookingsSelector } from '../selectors/groupedBookingsSelector';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBookings,
      fetchSellers,
      fetchProducts
    },
    dispatch
  );

const mapStateToProps = state => {
  const { bookings, sellers, products } = state;
  return {
    groupedBookings: groupedBookingsSelector(state),
    isFetching: bookings.isFetching || sellers.isFetching || products.isFetching
  };
};

export const bookingsConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
