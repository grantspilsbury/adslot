import { REQUEST_BOOKINGS, RECEIVE_BOOKINGS } from '../../constants/ActionTypes';

export const INITIAL_STATE = {
  isFetching: false,
  bookings: []
};

function bookingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_BOOKINGS:
      return { ...state, isFetching: true };
    case RECEIVE_BOOKINGS:
      return { ...state, isFetching: false, bookings: action.bookings };
    default:
      return state;
  }
}

export default bookingsReducer;
