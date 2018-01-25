import React, { Component } from "react";
import axios from 'axios';
import { Layout, Menu, Icon, Breadcrumb, Button, Table } from 'antd';
import './style.css';
const { Header, Sider, Content, Footer } = Layout;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            list: [],
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    getlist =  async ()  => {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users');
        console.log(response.data);
        this.setState({
            list: response.data,
        });
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
          }, {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
          }, {
            title: 'username',
            dataIndex: 'username',
            key: 'username',
          }, {
            title: 'website',
            dataIndex: 'website',
            key: 'website',
          }];
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">navdd 2d</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <div style={{ background: '#fff', padding: 24, minHeight:610 }}>
                            <Table columns={columns} dataSource={this.state.list} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    <Button type="primary" onClick={() => this.getlist()}>获取列表</Button>
                        Electron+Antd+Webpack+React ©2017 Created by lyr
                    </Footer>
                </Layout>
            </div>
        )
    }
}   