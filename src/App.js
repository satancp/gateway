import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './container';
import Main from './page/Main';
import Proxy from './page/Proxy';
import Device from './page/Device';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.containerRef = undefined;
    }

    render() {
        return (
            <BrowserRouter>
                <Container
                    getInstance={ref => {
                        this.containerRef = ref;
                    }}
                >
                    <Switch>
                        <Route
                            exact
                            path="/proxy"
                            component={() => {
                                return <Proxy container={this.containerRef} />;
                            }}
                        />
                        <Route
                            exact
                            path="/device"
                            component={() => {
                                return <Device container={this.containerRef} />;
                            }}
                        />
                        <Route
                            exact
                            path="/"
                            component={() => {
                                return <Main container={this.containerRef} />;
                            }}
                        />
                    </Switch>
                </Container>
            </BrowserRouter>
        );
    }
}
