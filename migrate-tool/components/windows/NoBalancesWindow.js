import React from 'react';

class NoBalancesWindow extends React.Component {
    render() {
        return (
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Migration Tool</h2>
                    <p>From The EtherDelta's Smart Contract to the Improved ForkDelta Smart Contract </p>
                </div>
                <div className="modal-body text-center">
                    <p><strong> Your account has no balances on the old EtherDelta Smart Contract!</strong></p>
                    <p> Your selected account has no need of this migration tool. </p>
                    <p> If you'd like to check another account, return to ForkDelta and select a different account in the top-right. </p>
                    <br />
                    <button className="btn btn-default" onClick={this.props.closeWindow}>Return to ForkDelta</button>
                </div>
            </div>
        )
    }
}

export default NoBalancesWindow;