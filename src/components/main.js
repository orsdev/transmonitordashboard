import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Sidebar from './sidebar';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Stats from './stats';
import Payments from './payments';
import Chart from './chart';

const { Header, Content } = Layout;

function Main() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 850px)').matches) {
      setCollapsed(true);
    }
  }, []);

  function toggle() {
    setCollapsed(!collapsed);
  }

  return (
    <>
      <main className="main">
        <div className="main-container">
          <Layout>
            <Sidebar collapsed={collapsed} />
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: toggle,
                  }
                )}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '5px 16px',
                  padding: 24,
                }}>
                <Stats />
                <Chart />
                <Payments />
              </Content>
            </Layout>
          </Layout>
        </div>
      </main>
    </>
  );
}

export default Main;
