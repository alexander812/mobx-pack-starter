import { BaseStore } from 'mobx-pack';
import { observable, action } from 'mobx';
import { DEAL_SERVICE } from 'platform/constants/moduleNames.js';
import context from 'platform/helper/context.js';


export class PriceService extends BaseStore {
  config = {
    bindAs: DEAL_SERVICE,
  };

  api = {
    addDeal: this.addDeal,
  };

  @observable deals = [];


  onStart() {
    return true;
  }

  @action addDeal(data) {
    this.deals.push({ ...{ id: this.deals.length }, ...data });
  }
}


export default new PriceService(context);
