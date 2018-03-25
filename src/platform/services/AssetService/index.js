import { find } from 'lodash';
import { observable, action, computed, reaction } from 'mobx';
import { BaseStore } from 'mobx-pack';
import { ASSET_SERVICE } from 'platform/constants/moduleNames.js';
import context from 'platform/helper/context.js';
import { fetchAssets } from 'platform/services/AssetService/client.js';


export class AssetService extends BaseStore {
  config = {
    bindAs: ASSET_SERVICE,
  };

  api = {
    selectAsset: this.selectAsset,
  };

  @observable assetCollection = [];

  @observable selectedAsset = 'gold';

  @computed get selectedAssetData() {
    return find(this.assetCollection, item => (item.id === this.selectedAsset));
  }


  onStart() {
    /*   reaction(
         ()=>{
           return this.selectedAsset;
         },
         (asset)=>{
           console.log(asset);
         },
       );
   */

    return fetchAssets().then((data) => {
      this.resetAssetCollection(data);
    });
  }

  @action resetAssetCollection(data) {
    this.assetCollection = data;
  }

  @action selectAsset(id) {
    this.selectedAsset = id;
  }
}

export default new AssetService(context);
