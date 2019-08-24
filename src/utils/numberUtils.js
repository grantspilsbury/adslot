const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const toDollars = val => currencyFormatter.format(val / 100);
