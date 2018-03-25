import { Connector } from 'mobx-pack';
import CurrentPrice from 'platform/components/CurrentPrice/index.jsx';
import PriceService from 'platform/services/PriceService/index.js';
import AssetService from 'platform/services/AssetService/index.js';


export default Connector(
  CurrentPrice,
  {
    helper() {
      return {
        bid: PriceService.bidPrice,
        ask: PriceService.askPrice,
        asset: AssetService.selectedAsset,
      };
    },
  },
);

