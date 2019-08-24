import { REQUEST_SELLERS, RECEIVE_SELLERS } from '../../constants/ActionTypes';

function requestSellers() {
  return {
    type: REQUEST_SELLERS
  };
}

function receiveSellers(json) {
  return {
    type: RECEIVE_SELLERS,
    items: json.data
  };
}

function shouldFetchSellers(state) {
  const sellers = state.sellers;
  return !sellers.items.length && !sellers.isFetching;
}

export function fetchSellers() {
  return (dispatch, getState) => {
    if (shouldFetchSellers(getState())) {
      dispatch(requestSellers());
      return fetch(`https://blooming-fortress-38880.herokuapp.com/sellers`)
        .then(response => response.json())
        .then(json => dispatch(receiveSellers(json)));
    }
  };
}
