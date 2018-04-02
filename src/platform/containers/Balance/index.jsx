import { Connector } from 'mobx-pack';
import { observer } from 'mobx-react';
import balanceService from 'platform/services/BalanceService/index.js';
import Balance from 'platform/components/Balance/index.jsx';


export default Connector(
  observer(Balance),
  {
    helper() {
      return {
        balance: balanceService.balance,
      };
    },
  },
);

