import { observable, action, runInAction, reaction } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE, BASE_SERVICE } from 'platform/constants/moduleNames.js';


export default class DealFormStore extends BaseStore {
  config = {
    bindAs: 'DealFormStore',
    importData: {
      [BASE_SERVICE]: {
        serverTimeDelta: 'serverTimeDelta',
      },
    },
  };

  @observable time = null;
  timerId = null;

  api = {
    selectAsset: this.selectAsset,
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
}

