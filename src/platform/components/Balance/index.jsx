import React from 'react';

const Balance = ({
  api, balance, isRecharge, defaultAmount, bonusPercent,
}) => (
  <div>
    <h3>Balance:</h3>
    <div><strong>Usd</strong> ${balance.usd}</div>
    <div><strong>Gold</strong> {balance.gold} oz.</div>
    <div><strong>Oil</strong> {balance.oil} bbl.</div>

    {
      isRecharge
        ?
          <button
            onClick={api.recharge}
          >Get ${defaultAmount} with {bonusPercent}% bonus
          </button>
         : null
    }
  </div>
);


export default Balance;

