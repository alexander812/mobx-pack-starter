import { Connector } from 'mobx-pack';
import AssetSelector from 'platform/components/AssetSelector/index.jsx';
import AssetService from 'platform/services/AssetService/index.js';


export default Connector(
  AssetSelector,
  {
    helper() {
      return {
        assets: AssetService.assetCollection,
        selectedAsset: AssetService.selectedAsset,
      };
    },
  },
);

