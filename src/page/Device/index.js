import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Device extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.container.setHeader('Attached Devices');
        this.props.container.setSelected('2');
    }

    render() {
        return <div>Device</div>;
    }
}

export default withRouter(Device);
