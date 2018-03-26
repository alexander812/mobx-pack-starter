import { observable, action, computed, reaction } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE } from 'platform/constants/moduleNames.js';


export default class DealFormStore extends BaseStore {
  config = {
    bindAs: 'DealFormStore',
  };

  api = {
    selectAsset: this.selectAsset,
  };

  @action selectAsset(id) {
    this.callApi(ASSET_SERVICE, 'selectAsset', id);
  }
}

