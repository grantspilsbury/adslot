import { UPDATE_SEARCH } from '../../constants/ActionTypes';

export const INITIAL_STATE = {
  term: ''
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SEARCH:
      return { term: action.term };
    default:
      return state;
  }
}

export default searchReducer;
