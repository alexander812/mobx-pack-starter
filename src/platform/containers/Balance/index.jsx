import { Connector } from 'mobx-pack';
import { observer } from 'mobx-react';
import context from 'platform/helper/context.js';
import balanceService from 'platform/services/BalanceService/index.js';
import BalanceStore from 'platform/containers/Balance/store/BalanceStore.js';
import Balance from 'platform/components/Balance/index.jsx';


export default Connector(
  observer(Balance),
  {
    store() {
      return new BalanceStore(context);
    },
    helper(store) {
      return {
        balance: balanceService.balance,
        isRecharge: store.isRecharge,
        bonusPercent: store.bonusPercent,
        defaultAmount: store.defaultAmount,
      };
    },
  },
);

