import { BaseStore } from 'mobx-pack';
import { BASE_SERVICE } from 'platform/constants/moduleNames.js';
import context from 'platform/helper/context.js';


export class BaseService extends BaseStore {
  config = {
    bindAs: BASE_SERVICE,
    exportData: { serverTimeDelta: 1 },
  };
  // difference between server and local time in milliseconds, would get with initial request
  serverTimeDelta = 55;
}

export default new BaseService(context);
