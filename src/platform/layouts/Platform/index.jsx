import React from 'react';
import CurrentPrice from 'platform/containers/CurrentPrice/index.jsx';
import DealForm from 'platform/containers/DealForm/index.jsx';
import Deals from 'platform/containers/Deals/index.jsx';
import Balance from 'platform/containers/Balance/index.jsx';
import RechargeForm from 'platform/containers/RechargeForm/index.jsx';


const Platform = () => (
  <div>
    <div style={{ float: 'left', width: '50%' }}>
      <Balance />
      <hr />
      <CurrentPrice />
      <hr />
      <DealForm />
      <hr />
      <Deals />
    </div>

    <div style={{ float: 'left', width: '50%' }}>
      <RechargeForm />
      <hr />
    </div>

  </div>
);


export default Platform;

