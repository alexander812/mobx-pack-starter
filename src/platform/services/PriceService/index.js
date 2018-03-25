import { BaseStore } from 'mobx-pack';
import { observable, action, computed, reaction, runInAction } from 'mobx';
import { PRICE_SERVICE, ASSET_SERVICE } from 'platform/constants/moduleNames.js';
import context from 'platform/helper/context.js';

function randNumber(min, max) {
  return Math.floor(Math.random() * (max - (min + 1))) + min;
}

export class PriceService extends BaseStore {
  config = {
    bindAs: PRICE_SERVICE,
    importData: {
      [ASSET_SERVICE]: {
        selectedAssetData: 'selectedAssetData',
      },
    },
    waitFor: [ASSET_SERVICE],
  };

  api = {};

  @observable bidPrice = null;
  @observable askPrice = null;


  onStart() {
    this.priceGenerator();

    reaction(
      () => ([this.bidPrice, this.askPrice]),
      ([bidPrice, askPrice]) => {
        //console.log(['price', bidPrice, askPrice]);
      },
    );

    return true;
  }

  priceGenerator() {
    setInterval(() => {
      if (this.selectedAssetData) {
        const { minPrice, spread } = this.selectedAssetData;
        runInAction(() => {
          this.bidPrice = randNumber(minPrice - 10, minPrice + 10);
          this.askPrice = randNumber(minPrice + spread + 10, minPrice + spread - 10);
        });
      }
    }, 1000);
  }
}


export default new PriceService(context);
