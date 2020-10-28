import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import Stats from './stats';
import Payments from './payments';

const { Header, Content } = Layout;

function Main() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 850px)").matches) {
      setCollapsed(true);
    }
  }, []);


  function toggle() {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <main className="main">
        <Layout>
          <Sidebar collapsed={collapsed} />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24
              }}
            >
              <Stats />
              <Payments />
            </Content>
          </Layout>
        </Layout>
      </main>
    </>
  )
}

export default Main;
