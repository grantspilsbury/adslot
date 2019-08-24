import React from 'react';

const BookingGroup = () => (
  <section>
    <h2>Section title</h2>
    <div className="table-responsive">
      <table className="table table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <td>B1254</td>
            <td>Homepage banner ad</td>
            <td>150,000</td>
            <td>$50.00</td>
            <td>$7,500</td>
          </tr>
          <tr>
            <td>B1254</td>
            <td>Homepage banner ad</td>
            <td>150,000</td>
            <td>$50.00</td>
            <td>$7,500</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default BookingGroup;
