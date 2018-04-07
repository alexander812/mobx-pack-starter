import React from 'react';
import { ASSET_NAMES } from 'platform/constants/common.js';

class RechargeForm extends React.Component {
  static displayName = 'RechargeForm';

  constructor(props) {
    super();

    this.state = {
      amount: props.amount,
    };

    this.input = null;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.amount !== this.props.amount) {
      this.setState({ amount: nextProps.amount });
    }
    if (nextProps.inFocus !== this.props.inFocus && !!nextProps.inFocus) {
      setTimeout(() => {
        this.input.focus();
        this.input.select();
      });
    }
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
        <div>
          <input
            ref={(node) => { this.input = node; }}
            type="text"
            value={this.state.amount}
            onChange={this.onChange}
          />
          {ASSET_NAMES.USD}
        </div>
        <div>+ ${this.props.bonusPercent} bonus</div>
        <div><button>Fund</button></div>
      </form>
    );
  }
}

export default RechargeForm;

