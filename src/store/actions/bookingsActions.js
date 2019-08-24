import fetch from 'cross-fetch';
import { REQUEST_BOOKINGS, RECEIVE_BOOKINGS } from '../../constants/ActionTypes';

function requestBookings() {
  return {
    type: REQUEST_BOOKINGS
  };
}

function receiveBookings(json) {
  return {
    type: RECEIVE_BOOKINGS,
    bookings: json.data
  };
}

function fetchBookings() {
  return dispatch => {
    dispatch(requestBookings());
    return fetch(`https://blooming-fortress-38880.herokuapp.com/bookings`)
      .then(response => response.json())
      .then(json => dispatch(receiveBookings(json)));
  };
}

function shouldFetchBookings(state) {
  const bookings = state.bookings;
  return !bookings && !bookings.isFetching;
}

export function fetchBookingsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchBookings(getState())) {
      return dispatch(fetchBookings());
    }
  };
}
