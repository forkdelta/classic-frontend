import React from 'react';

class IntroductionWindow extends React.Component {
    constructor(props) {
        super(props);
        this.props.get_user_address();
    }
    render() {
        let user_addr = this.props.user_address;
        return (
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Migration Tool</h2>
                    <p>From The EtherDelta's Smart Contract to the Improved ForkDelta Smart Contract </p>
                </div>
                <div className="modal-body text-center">
                    <p>This tool is currently checking the following account address: {user_addr}</p>
                    <p><strong> * Describe the tool and why the transfer is needed here * </strong></p>
                    <br />
                    <button className="btn btn-default" onClick={this.props.nextWindow}>Proceed</button>
                </div>
            </div>
        )
    }
}

export default IntroductionWindow;