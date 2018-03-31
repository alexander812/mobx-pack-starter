import { Connector } from 'mobx-pack';
import DealBlock from 'platform/components/DealBlock/index.jsx';


export default Connector(
  DealBlock,
  {
    helper(store) {
      return {
        quantity: store.quantity,
      };
    },
  },
);

