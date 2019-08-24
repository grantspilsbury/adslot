import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../../constants/ActionTypes';

export const INITIAL_STATE = {
  isFetching: false,
  items: []
};

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return { ...state, isFetching: true };
    case RECEIVE_PRODUCTS:
      return { ...state, isFetching: false, items: action.items };
    default:
      return state;
  }
}

export default productReducer;
