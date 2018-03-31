import React from 'react';

const DealBlock = ({ quantity, api }) => (
  <div>
    <label>
      <input type="text" value={quantity} onChange={api.enterQuantity} />
      <button onClick={api.buyAsset}>Buy</button>
      <button onClick={api.sellAsset}>Sell</button>

    </label>
  </div>
);


export default DealBlock;

