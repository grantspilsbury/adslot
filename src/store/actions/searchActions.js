import { UPDATE_SEARCH } from '../../constants/ActionTypes';

export function updateSearch(term) {
  return {
    type: UPDATE_SEARCH,
    term
  };
}
