import React from "react";

class SuccessWindow extends React.Component {
    render() {
        return (

            <div className="modal-content">
                <div className="modal-header text-center">
                    <h2>Progress</h2>
                    <p>You Can Close This Window and Check Your Progress At Any Time</p>
                </div>
                <div className="modal-body text-center">
                    <p> Progress </p>
                    <br />
                    <button className="btn btn-default" onClick={this.props.closeWindow}>Close Migration Tool</button>
                </div>
            </div>
        )
    }
}

export default SuccessWindow;