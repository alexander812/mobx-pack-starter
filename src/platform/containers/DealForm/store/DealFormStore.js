import { observable, action, runInAction, computed, toJS } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE, BASE_SERVICE, DEAL_SERVICE } from 'platform/constants/moduleNames.js';


export default class DealFormStore extends BaseStore {
  config = {
    bindAs: 'DealFormStore',
    importData: {
      [BASE_SERVICE]: {
        serverTimeDelta: 'serverTimeDelta',
      },
      [ASSET_SERVICE]: {
        selectedAsset: 'selectedAsset',
      },
    },
  };

  @observable time = null;
  @observable quantity = 0;
  @computed get deal() {
    return {
      time: this.time,
      quantity: Number(this.quantity),
      asset: this.selectedAsset,
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
    this.callApi(DEAL_SERVICE, 'addDeal', { ...{ type: 'buy' }, ...data });
  }
  @action sellAsset() {
    const data = toJS(this.deal);
    this.callApi(DEAL_SERVICE, 'addDeal', { ...{ type: 'sell' }, ...data });
  }

  @action enterQuantity(e) {
    const val = e.currentTarget.value;
    if (!Number.isNaN(Number(val))) {
      this.quantity = val;
    }
  }
}

