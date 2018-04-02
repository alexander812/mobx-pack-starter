import React from 'react';

const CurrentPrice = ({ asset, bid, ask }) => (
  <div>
    <h3>Current price:</h3>
    <div><strong>Asset Id:</strong> {asset}</div>
    <div><strong>Bid price:</strong> {bid}</div>
    <div><strong>Ask price:</strong> {ask}</div>
  </div>
);

export default CurrentPrice;

