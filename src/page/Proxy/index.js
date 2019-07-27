import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Proxy extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.container.setHeader('Proxy Setting');
        this.props.container.setSelected('3');
    }

    render() {
        return <div>Proxy</div>;
    }
}

export default withRouter(Proxy);
