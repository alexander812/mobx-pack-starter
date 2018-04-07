import React from 'react';

const DealBlock = ({ api, quantity, isRecharge }) => (
  <div>
    <label htmlFor="recharge_input">
      <input id="recharge_input" type="text" value={quantity} onChange={api.enterQuantity} />
      <button onClick={api.buyAsset}>Buy</button>
      <button onClick={api.sellAsset}>Sell</button>
    </label>

    { isRecharge ?
      <div>
      Not enough funds
        <button
          onClick={api.focusRecharge}
        >
        Take more
        </button>
      </div>
      : null
    }
  </div>
);


export default DealBlock;

