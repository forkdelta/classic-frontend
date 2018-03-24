import React from 'react';

class NoAccountWindow extends React.Component {
    render() {
        return (
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Migration Tool</h2>
                    <p>From The EtherDelta's Smart Contract to the Improved ForkDelta Smart Contract </p>
                </div>
                <div className="modal-body text-center">
                    <p><strong> Please select an account to use the migration tool. </strong></p>
                    <br />
                    <button className="btn btn-default" onClick={this.props.closeWindow}>Close Tool</button>
                </div>
            </div>
        )
    }
}

export default NoAccountWindow;