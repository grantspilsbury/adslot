import { REQUEST_BOOKINGS, RECEIVE_BOOKINGS } from '../../constants/ActionTypes';

function requestBookings() {
  return {
    type: REQUEST_BOOKINGS
  };
}

function receiveBookings(json) {
  return {
    type: RECEIVE_BOOKINGS,
    items: json.data
  };
}

function shouldFetchBookings(state) {
  const bookings = state.bookings;
  return !bookings.items.length && !bookings.isFetching;
}

export function fetchBookings() {
  return (dispatch, getState) => {
    if (shouldFetchBookings(getState())) {
      dispatch(requestBookings());
      return fetch(`https://blooming-fortress-38880.herokuapp.com/bookings`)
        .then(response => response.json())
        .then(json => dispatch(receiveBookings(json)));
    }
  };
}
