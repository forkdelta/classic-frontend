import React from 'react';

class LoadingWindow extends React.Component {
    render() {
        return (<div className="migration-loader">
            <i className="fa fa-spinner fa-pulse"></i>
        </div>)
    }
}

export default LoadingWindow;