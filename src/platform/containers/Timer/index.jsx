import { Connector } from 'mobx-pack';
import Timer from 'platform/components/Timer/index.jsx';

export default Connector(
  Timer,
  {
    helper(store) {
      return {
        time: store.time,
      };
    },
  },
);

