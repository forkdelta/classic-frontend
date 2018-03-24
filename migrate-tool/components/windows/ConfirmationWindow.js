import React from "react";

class ConfirmationWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Confirmation</h2>
                </div>
                <div className="modal-body text-center">
                    <p>If all the information is correct, begin </p>
                    {/* TODO: add estimate gas cost of migrate*/}
                    <h3> Estimated Gas Cost </h3>
                    <h3> Added tokens </h3>
                    <ul className="list-group">
                    </ul>
                    <br />
                    <button className="btn btn-default" onClick={this.props.previousWindow}>Previous (Orders)</button>
                    <button className="btn btn-default" onClick={this.props.nextWindow}>Begin Migration</button>
                </div>
            </div>
        )
    }
}

export default ConfirmationWindow;