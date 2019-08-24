import { REQUEST_BOOKINGS, RECEIVE_BOOKINGS } from '../../constants/ActionTypes';

export const INITIAL_STATE = {
  isFetching: false,
  items: []
};

function bookingsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_BOOKINGS:
      return { ...state, isFetching: true };
    case RECEIVE_BOOKINGS:
      return { ...state, isFetching: false, items: action.items };
    default:
      return state;
  }
}

export default bookingsReducer;
