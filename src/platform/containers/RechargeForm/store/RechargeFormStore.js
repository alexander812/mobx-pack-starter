import { observable, action, runInAction, computed, toJS } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE, BASE_SERVICE, DEAL_SERVICE, BALANCE_SERVICE, PRICE_SERVICE, RECHARGE_SERVICE }
  from 'platform/constants/moduleNames.js';


export default class DealFormStore extends BaseStore {
  config = {
    bindAs: ' RechargeFormStore',
    importData: {
      [BASE_SERVICE]: {
        serverTimeDelta: 'serverTimeDelta',
      },
      [BALANCE_SERVICE]: {
        balance: 'balance',
      },
      [PRICE_SERVICE]: {
        asset: 'asset',
        bidPrice: 'bidPrice',
        askPrice: 'askPrice',
      },
    },
  };

  api = {
    recharge: this.recharge,

  };

  @action recharge(val) {
    this.callApi(RECHARGE_SERVICE, 'recharge', val);
  }
}

