import { Connector } from 'mobx-pack';
import context from 'platform/helper/context.js';
import RechargeFormStore from 'platform/containers/RechargeForm/store/RechargeFormStore.js';
import rechargeService from 'platform/services/RechargeService/index.js';
import RechargeForm from 'platform/components/RechargeForm/index.jsx';

export default Connector(
  RechargeForm,
  {
    store() {
      return new RechargeFormStore(context);
    },
    helper() {
      return {
        bonusPercent: rechargeService.bonusPercent,
      };
    },
    services: [rechargeService],
  },
);

