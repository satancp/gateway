import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Tooltip, Drawer, Input, Button } from 'antd';
import logo from './assets/logo.png';
import moment from 'moment';

const { Header, Content, Footer, Sider } = Layout;

class Container extends Component {
    constructor(props) {
        super(props);
        const { getInstance } = this.props;
        if (typeof getInstance === 'function') {
            getInstance(this);
        }
        this.state = {
            header: 'Main',
            selected: window.sessionStorage.getItem('menu-selected')
                ? window.sessionStorage.getItem('menu-selected')
                : '1',
            showLogin: false,
            username: '',
            password: ''
        };
        this.setHeader = this.setHeader.bind(this);
    }

    setHeader(header) {
        this.setState({ header });
    }

    setSelected(selected) {
        window.sessionStorage.setItem('menu-selected', selected);
        this.setState({ selected });
    }

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div
                        className="logo"
                        style={{
                            height: '64px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            this.props.history.push('/');
                        }}
                    >
                        <img src={logo} alt="logo" style={{ height: '44px' }} />
                    </div>
                    <Menu theme="dark" mode="inline" selectedKeys={[this.state.selected]}>
                        <Menu.Item
                            key="1"
                            onClick={() => {
                                this.setSelected('1');
                                this.props.history.push('/');
                            }}
                        >
                            <Icon type="dashboard" />
                            <span className="nav-text">Operating Status</span>
                        </Menu.Item>
                        <Menu.Item
                            key="2"
                            onClick={() => {
                                this.setSelected('2');
                                this.props.history.push('/device');
                            }}
                        >
                            <Icon type="apartment" />
                            <span className="nav-text">Attached Devices</span>
                        </Menu.Item>
                        <Menu.Item
                            key="3"
                            onClick={() => {
                                this.setSelected('3');
                                this.props.history.push('/proxy');
                            }}
                        >
                            <Icon type="global" />
                            <span className="nav-text">Proxy Setting</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            background: '#fff',
                            padding: 0,
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            color: 'rgba(0, 0, 0, 0.85)',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: 'default',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        {this.state.header}
                        <Tooltip placement="left" title="Please Login">
                            <Avatar
                                icon="user"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    this.setState({ showLogin: true });
                                }}
                            />
                        </Tooltip>
                        <Drawer
                            title="Login"
                            placement="right"
                            closable={false}
                            onClose={() => {
                                this.setState({ showLogin: false });
                            }}
                            style={{ height: '100%' }}
                            visible={this.state.showLogin}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}
                            >
                                <div>
                                    <div>Username:</div>
                                    <Input
                                        placeholder="Please input your username"
                                        allowClear
                                        onChange={v => {
                                            this.setState({ username: v });
                                        }}
                                    />
                                    <div style={{ marginTop: '10px' }}>Password:</div>
                                    <Input.Password
                                        placeholder="Please input your password"
                                        password
                                        onChange={v => {
                                            this.setState({ username: v });
                                        }}
                                    />
                                </div>
                                <div>
                                    <Button
                                        onClick={() => {
                                            this.setState({ showLogin: false });
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            this.setState({ showLogin: false });
                                        }}
                                        type="primary"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </Drawer>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>{this.props.children}</Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Plum ©2018-{moment().year()} Powered by Little Box Studio
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Container);
