import React from 'react';
import CurrentPrice from 'platform/containers/CurrentPrice/index.jsx';
import DealForm from 'platform/containers/DealForm/index.jsx';
import Deals from 'platform/containers/Deals/index.jsx';
import Balance from 'platform/containers/Balance/index.jsx';


const Platform = () => (
  <div>
    <Balance />
    <hr/>
    <CurrentPrice />
    <hr/>
    <DealForm />
    <hr/>
    <Deals />
  </div>
);


export default Platform;

