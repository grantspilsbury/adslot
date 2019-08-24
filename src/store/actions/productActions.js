import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../../constants/ActionTypes';

function requestProducts() {
  return {
    type: REQUEST_PRODUCTS
  };
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    items: json.data
  };
}

function shouldFetchProducts(state) {
  const products = state.products;
  return !products.items.length && !products.isFetching;
}

export function fetchProducts() {
  return (dispatch, getState) => {
    if (shouldFetchProducts(getState())) {
      dispatch(requestProducts());
      return fetch(`https://blooming-fortress-38880.herokuapp.com/products`)
        .then(response => response.json())
        .then(json => dispatch(receiveProducts(json)));
    }
  };
}
