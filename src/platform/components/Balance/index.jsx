import React from 'react';

const Balance = ({ balance }) => (
  <div>
    <h3>Баланс:</h3>
    <div><strong>Usd</strong> ${balance.usd}</div>
    <div><strong>Gold</strong> ${balance.gold}</div>
    <div><strong>Oil</strong> ${balance.oil}</div>
  </div>
);


export default Balance;

