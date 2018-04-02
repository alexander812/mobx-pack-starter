import { observable, action, runInAction, computed, toJS } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE, BASE_SERVICE, DEAL_SERVICE, BALANCE_SERVICE, PRICE_SERVICE }
  from 'platform/constants/moduleNames.js';
import { DEAL_TYPE } from 'platform/constants/common.js';


export default class DealFormStore extends BaseStore {
  config = {
    bindAs: 'DealFormStore',
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

  @observable time = null;
  @observable quantity = 0;
  @computed get deal() {
    return {
      time: this.time,
      quantity: Number(this.quantity),
      bidPrice: this.bidPrice,
      askPrice: this.askPrice,
      asset: this.asset,
    };
  }

  timerId = null;

  api = {
    selectAsset: this.selectAsset,
    buyAsset: this.buyAsset,
    sellAsset: this.sellAsset,
    enterQuantity: this.enterQuantity,
  };

  onStart() {
    this.initTimer();
    return true;
  }

  initTimer() {
    this.timerId = setInterval(() => {
      runInAction(() => {
        this.time = (new Date()).getTime() - this.serverTimeDelta;
      });
    }, 1000);
  }

  onStop() {
    clearInterval(this.timerId);
    return true;
  }

  @action selectAsset(id) {
    this.callApi(ASSET_SERVICE, 'selectAsset', id);
  }
  @action buyAsset() {
    const data = toJS(this.deal);
    const result = this.callApi(DEAL_SERVICE, 'makeDeal', { ...{ type: DEAL_TYPE.BUY }, ...data });
    if (result !== true) {
      alert(result);
    }
  }
  @action sellAsset() {
    const data = toJS(this.deal);
    const result = this.callApi(DEAL_SERVICE, 'makeDeal', { ...{ type: DEAL_TYPE.SELL }, ...data });
    if (result !== true) {
      alert(result);
    }
  }

  @action enterQuantity(e) {
    const val = e.currentTarget.value;
    if (!Number.isNaN(Number(val))) {
      this.quantity = val;
    }
  }
}

