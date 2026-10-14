import React from 'react';
import fulfillmentData from './data';

function Fulfillment() {
  return (
    <div className="content-margined">
      <h2>Fulfillment</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>CUSTOMER</th>
            <th>ORDER DATE</th>
            <th>STATUS</th>
            <th>SHIPPED DATE</th>
          </tr>
        </thead>

        <tbody>
          {fulfillmentData.orders.map((order) => (
            <tr
              key={order.id}
              className={order.shipped ? '' : 'unshipped-order'}
            >
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.orderDate}</td>
              <td>{order.shipped ? 'Shipped' : 'Unshipped'}</td>
              <td>{order.shippedDate || 'Not Shipped'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Fulfillment;