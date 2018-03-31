import React from 'react';
import ReactDOM from 'react-dom';
import priceService from 'platform/services/PriceService/index.js';
import assetService from 'platform/services/AssetService/index.js';
import baseService from 'platform/services/BaseService/index.js';
import Platform from 'platform/layouts/Platform/index.jsx';


document.addEventListener('DOMContentLoaded', () => {
  Promise.all([
    priceService.start('entry'),
    assetService.start('entry'),
    baseService.start('entry'),
  ]).then(() => {
    ReactDOM.render(React.createElement(Platform), document.querySelector('#root'));
  });
});

