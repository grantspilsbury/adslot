import { createSelector } from 'reselect';
import _get from 'lodash.get';

const sellersSelector = state => _get(state, 'sellers.items');

export const sellerNamesSelector = createSelector(
  sellersSelector,
  sellers => (sellers || []).map(seller => seller.name)
);

export default sellerNamesSelector;
