import React from 'react';
import { Connector } from 'mobx-pack';
import context from 'platform/helper/context.js';

import DealFormStore from 'platform/containers/DealForm/store/DealFormStore.js';

import AssetSelector from 'platform/containers/AssetSelector/index.jsx';
import Timer from 'platform/containers/Timer/index.jsx';
import DealBlock from 'platform/containers/DealBlock/index.jsx';


const Form = () => (
  <div>
    <h1>Form</h1>
    <Timer />
    <AssetSelector />
    <DealBlock />
  </div>
);

export default Connector(
  Form,
  {
    store: () => new DealFormStore(context),
  },
);

