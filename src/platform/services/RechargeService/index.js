import { BaseStore } from 'mobx-pack';
import { observable, action } from 'mobx';
import { RECHARGE_SERVICE, BALANCE_SERVICE } from 'platform/constants/moduleNames.js';
import { ASSET_NAMES } from 'platform/constants/common.js';
import context from 'platform/helper/context.js';


export class RechargeService extends BaseStore {
  config = {
    bindAs: RECHARGE_SERVICE,
    exportData: {
      bonusPercent: 1,
      defaultAmount: 1,
    },
  };

  api = {
    recharge: this.recharge,
    rechargeDefault: this.rechargeDefault,
  };

  @observable bonusPercent = 50;
  defaultAmount = 1000;

  @action recharge(val) {
    const amount = val + parseInt((val / 100) * this.bonusPercent, 10);
    this.callApi(BALANCE_SERVICE, 'changeBalance', { [ASSET_NAMES.USD]: amount });
  }
}


export default new RechargeService(context);
