import React from "react";

class Balance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li><input type="checkbox"
                       onChange={this.props.onChange}
                       checked={this.props.checked}/>
                {this.props.label}</li>
        )
    }
}

export default Balance;