import { Connector } from 'mobx-pack';
import { observer } from 'mobx-react';

import dealService from 'platform/services/DealService/index.js';
import Deals from 'platform/components/Deals/index.jsx';


export default Connector(
  observer(Deals),
  {
    helper() {
      return {
        deals: dealService.deals,
    };
    },
  },
);

