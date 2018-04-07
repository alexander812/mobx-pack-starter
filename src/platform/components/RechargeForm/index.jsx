import React from 'react';
import { ASSET_NAMES } from 'platform/constants/common.js';

class RechargeForm extends React.Component {
  static displayName = 'RechargeForm';

  constructor() {
    super();

    this.state = {
      amount: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ amount: e.currentTarget.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.api.recharge(Number(this.state.amount));
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>Fund:</div>
        <div><input type="text" value={this.state.amount} onChange={this.onChange} /> {ASSET_NAMES.USD}</div>
        <div>+ ${this.props.bonusPercent} bonus</div>
        <div><button>Fund</button></div>
      </form>
    );
  }
}

export default RechargeForm;

