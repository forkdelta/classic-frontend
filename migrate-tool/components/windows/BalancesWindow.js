import React from 'react';
import Balance from '../Balance'

class BalancesWindow extends React.Component {
    constructor(props) {
        super(props);

    }

    populateBalanceOptions() {
        return this.props.balances_options.map((balance, index) => {
            return (
                <Balance
                    onChange={() => this.props.onBalanceSelect(index)}
                    checked={balance.is_selected}
                    key={balance.addr}
                    label={balance.name + ":" + balance.balance}/>
            )
        });
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Balances</h2>
                    <p>Currently on the EtherDelta Contract to be Transferred to the ForkDelta Contract </p>
                </div>
                <div className="modal-body text-center">
                    <div className="container migration-container">
                        <div className="row">
                            <ul>
                                {this.populateBalanceOptions()}
                            </ul>
                        </div>
                        <div className="row">
                            <h2>Missing A Balance?</h2>
                            <p>Add Tokens Not Listed With ForkDelta's Tokens</p>
                            <form id="token-addr-form" onSubmit={this.props.handleTokenAdd}>
                                <div className="form-group">
                                    <label htmlFor="new-token-addr-input">Token Address</label>
                                    <input required size="42" pattern="^0x.{40}$" className="form-control"
                                           id="new-token-addr-input"
                                           placeholder="0x0000000000000000000000000000000000000000" />
                                </div>
                                <button type="submit" className="btn btn-default">Add token</button>
                            </form>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-default" onClick={this.props.previousWindow}>Previous (Introduction)</button>
                    <button className="btn btn-default" onClick={this.props.nextWindow}>Next (Orders)</button>
                </div>
            </div>
        )
    }
}

export default BalancesWindow;