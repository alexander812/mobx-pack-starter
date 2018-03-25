import React from 'react';

const CurrentPrice = ({ asset, bid, ask }) => (
  <div>
    Asset Id: <strong> {asset} </strong><br />
    Bid price: <strong>{bid}</strong> <br />
    Ask price: <strong>{ask}</strong> <br />
  </div>
);


export default CurrentPrice;

