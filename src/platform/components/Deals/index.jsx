import React from 'react';


function Deals({ deals }) {
  return (
    <div>
      {deals.length ?
        <table>
          <thead>
          <tr>
            <th>asset</th>
            <th>quantity</th>
            <th>type</th>
            <th>time</th>

          </tr>
        </thead>
          <tbody>
          {deals.map(({
                        id, asset, quantity, type, time,
                      }) => (
                        <tr key={id}>
                          <td>{asset}</td>
                          <td>{quantity}</td>
                          <td>{type}</td>
                          <td>{new Date(time).toTimeString()}</td>
                        </tr>))}

          </tbody>
        </table>

      : null }

    </div>
  );
}


export default Deals;

