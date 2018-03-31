import React from 'react';

function Deals({ deals }) {
  return (
    <div>
      <ul>
        {deals.map(({
 id, asset, quantity, type, time,
}) => (<li key={id}>asset :{asset}, quantity: {quantity}, type: {type}, time: {new Date(time).toTimeString()}</li>))}
      </ul>
    </div>
  );
}


export default Deals;

