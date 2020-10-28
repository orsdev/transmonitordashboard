import React from 'react';
import { Table, Space } from 'antd';

const dataSource = [
  {
    key: '1',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Pending'
  },
  {
    key: '2',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Reconcilled'
  },
  {
    key: '3',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Reconcilled'
  },
  {
    key: '4',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Pending'
  },
  {
    key: '5',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Un-reconcilled'
  },
  {
    key: '6',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Pending'
  },
  {
    key: '7',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Reconcilled'
  },
  {
    key: '8',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Un-reconcilled'
  },
  {
    key: '9',
    type: 'Apple Mac Book 15” 250 SSD 12GB',
    price: '$73430',
    transaction: '1234567890',
    time: '12:30',
    status: 'Pending'
  },
];

const columns = [
  {
    title: 'Item Type ',
    dataIndex: 'type',
    key: 'type',
    render: (text) => (
      <Space size="middle">
        <h5>VW</h5>
        <h6>{text}</h6>
      </Space>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Transaction No',
    dataIndex: 'transaction',
    key: 'transaction',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      let dynamicClass = "";

      if (text === "Pending") {
        dynamicClass = "pending";
      } else if (text === "Reconcilled") {
        dynamicClass = "reconcilled";
      } else {
        dynamicClass = "default";
      };

      return (
        <Space size="middle">
          <button className={`status-btn ${dynamicClass}-btn`}>
            <span className={`status-dot ${dynamicClass}-dot`}></span>
            {text}
          </button>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </Space>
      )
    }
  },
];

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <button className="btn btn-lg">Previous</button>
  }
  if (type === 'next') {
    return <button className="btn btn-lg">Next</button>
  }

  return originalElement;
}

function TableData() {
  return (
    <section className="table mt-5">
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 700 }} pagination={{
        total: 18,
        current: 1,
        itemRender
      }} />
      <div className="table-entries">
        <h5>Showing 1 to 10 of 500 entries</h5>
      </div>
    </section>
  )
}

export default TableData;
