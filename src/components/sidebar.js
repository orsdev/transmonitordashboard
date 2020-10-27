import React from 'react';
import { Layout, Menu } from 'antd';
import Overview from '../assets/images/icons/overview.png';
import Reconcilled from '../assets/images/icons/reconcilled-payment.png';
import AllPayment from '../assets/images/icons/all-payments.png';
import Unreconcilled from '../assets/images/icons/unreconcilled-payment.png';
import ManualSettlement from '../assets/images/icons/manual-settlement.png';
import AllOrders from '../assets/images/icons/all-order.png';
import PendingOrders from '../assets/images/icons/pending-orders.png';
import ReconcilledOrders from '../assets/images/icons/reconcilled-order.png';
import MerchantProfile from '../assets/images/icons/merchant.png';

const { Sider } = Layout;

function Sidebar({ collapsed }) {
  return (
    <Sider
      trigger={null}
      breakpoint="md"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      width="250px"
      style={{
        minHeight: '100%'
      }}>
      <button className="btn btn-lg btn-success ant-layout-sider-invoice ml-5">
        GENERATE INVOICE
      </button>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <header className="ant-layout-sider-main">
          <h5>Main</h5>
        </header>
        <Menu.Item key="1" icon={<img src={Overview} alt="Overview" />}>
          Overview
        </Menu.Item>
        <header className="ant-layout-sider-payments">
          <h5>Payments</h5>
        </header>
        <Menu.Item key="2" icon={<img src={AllPayment} alt="All Payments" />}>
          All Payments
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<img src={Reconcilled} alt="Reconcilled Payments" />}>
          Reconcilled Payments
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<img src={Unreconcilled} alt="Unreconcilled Payments" />}>
          Un - Reconcilled Payments
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<img src={ManualSettlement} alt="Manual Settlement" />}>
          Manual Settlement
        </Menu.Item>
        <header className="ant-layout-sider-orders">
          <h5>Orders</h5>
        </header>
        <Menu.Item key="6" icon={<img src={AllOrders} alt="All Orders" />}>
          All Orders
        </Menu.Item>
        <Menu.Item
          key="7"
          icon={<img src={PendingOrders} alt="Pending Orders" />}>
          Pending Orders
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={<img src={ReconcilledOrders} alt="Reconcilled Orders" />}>
          ReconcilledOrders
        </Menu.Item>
        <Menu.Item
          key="9"
          icon={<img src={MerchantProfile} alt="Merchant Profile" />}>
          Merchant Profile
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
