import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Descriptions, Badge } from 'antd';
import hkimg from '../../assets/hong-kong.png';
import systemService from '../../service/system.service';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { version: 'unknown', ip: 'unknown', mac: 'unknown', netmask: 'unknown', gateway: 'unknown' };
    }

    async getData() {
        const systemInfo = await systemService.getSystemInfo();
        if (systemInfo.code === 0) {
            this.setState({
                version: systemInfo.data.version,
                ip: systemInfo.data.lan.ip,
                mac: systemInfo.data.lan.mac,
                netmask: systemInfo.data.lan.netmask,
                gateway: systemInfo.data.lan.gateway
            });
        }
    }

    componentDidMount() {
        this.props.container.setHeader('Operating Status');
        this.props.container.setSelected('1');
        this.getData();
    }

    render() {
        return (
            <div style={{ cursor: 'default' }}>
                <Descriptions title="Version" bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
                    <Descriptions.Item label="Software Version">{this.state.version}</Descriptions.Item>
                </Descriptions>
                <Descriptions
                    title="Lan"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    style={{ marginTop: '10px' }}
                >
                    <Descriptions.Item label="MAC Address">{this.state.mac}</Descriptions.Item>
                    <Descriptions.Item label="IP Address">{this.state.ip}</Descriptions.Item>
                    <Descriptions.Item label="Subnet Mask">{this.state.netmask}</Descriptions.Item>
                    <Descriptions.Item label="Gateway">{this.state.gateway}</Descriptions.Item>
                    <Descriptions.Item label="Status" span={3}>
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                </Descriptions>
                <Descriptions
                    title="Internet"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    style={{ marginTop: '10px' }}
                >
                    <Descriptions.Item label="Current Speed">100 Mb/s</Descriptions.Item>
                    <Descriptions.Item label="Data Transfer">71 Tb</Descriptions.Item>
                    <Descriptions.Item label="Max Bandwidth">1000 Mbps</Descriptions.Item>
                    <Descriptions.Item label="Proxy Server Location">
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            <img src={hkimg} style={{ width: '14px', marginRight: '5px' }} alt="Hong Kong" />
                            China - Hong Kong
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="Proxy Server Status" span={3}>
                        <Badge status="processing" text="Running" />
                    </Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default withRouter(Main);
