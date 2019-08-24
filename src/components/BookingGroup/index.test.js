import React from 'react';
import ReactDOM from 'react-dom';
import BookingGroup from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookingGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
