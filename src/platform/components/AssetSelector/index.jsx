import React from 'react';

const AssetSelector = ({ assets, selectedAsset, api }) => (
  <div>
    <h3>Select asset:</h3>
    {
      assets.map(({ id }) => (
        <button
          key={id}
          onClick={() => { api.selectAsset(id); }}
        >{selectedAsset === id ? <strong>{id}</strong> : id}
        </button>
      ))
    }
  </div>
);


export default AssetSelector;
