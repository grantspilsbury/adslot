import { REQUEST_SELLERS, RECEIVE_SELLERS } from '../../constants/ActionTypes';

export const INITIAL_STATE = {
  isFetching: false,
  items: []
};

function sellersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_SELLERS:
      return { ...state, isFetching: true };
    case RECEIVE_SELLERS:
      return { ...state, isFetching: false, items: action.items };
    default:
      return state;
  }
}

export default sellersReducer;
