import React from 'react';
import ReactDOM from 'react-dom';
import Bookings from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bookings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
