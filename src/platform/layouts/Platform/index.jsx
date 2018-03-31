import React from 'react';
import CurrentPrice from 'platform/containers/CurrentPrice/index.jsx';
import DealForm from 'platform/containers/DealForm/index.jsx';
import Deals from 'platform/containers/Deals/index.jsx';


const Platform = () => (
  <div>
    <CurrentPrice />
    <DealForm />
    <Deals />
  </div>
);


export default Platform;

