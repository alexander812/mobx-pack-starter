import React from 'react';
import { Connector } from 'mobx-pack';
import context from 'platform/helper/context.js';

import AssetSelector from 'platform/containers/AssetSelector/index.jsx';
import DealFormStore from 'platform/containers/DealForm/store/DealFormStore.js';


const Form = () => (
  <div>
    <h1>Form</h1>
    <AssetSelector />
  </div>
);

export default Connector(
  Form,
  {
    store: () => new DealFormStore(context),
  },
);

