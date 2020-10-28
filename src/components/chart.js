import React from 'react';
import { Row, Col, DatePicker } from 'antd';
import { Line } from 'react-chartjs-2';

const { RangePicker } = DatePicker;

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Overview',
      data: [20, 53, 85, 41, 64, 25],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

function Chart() {
  return (
    <>
      <section className="chart mt-5">
        <Row gutter={[18, 16]} align="stretch">
          <Col sm={24} md={24} lg={12} xl={16} className="line-chart">
            <div className="chart-header">
              <div className="chart-header-date">
                <h5>Today: {new Date().toDateString()}</h5>
              </div>
              <div className="chart-header-year">
                <RangePicker picker="year" placeholder={['1 Jan', '1 Jun']} />
              </div>
              <div className="chart-header-buttons">
                <button className="btn btn-md">
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <button className="btn btn-md">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <Line
              data={data}
              options={{
                scales: {
                  yAxes: [
                    {
                      stacked: true,
                    },
                  ],
                },
              }}
            />
          </Col>
          <Col sm={24} md={24} lg={12} xl={8}>
            <Row gutter={[16, 16]} className="second-row">
              <Col span={24}>
                <h5>Orders</h5>
                <ul>
                  <li>
                    Pending Orders:
                    <span className="yellow">10</span>
                  </li>
                  <li>
                    Reconcilled Orders:
                    <span className="green">20</span>
                  </li>
                  <li>
                    Total Orders:
                    <span className="blue">100</span>
                  </li>
                </ul>
              </Col>
              <Col span={24}>
                <h5>Payments</h5>
                <ul>
                  <li>
                    Un-reconcilled Payments:
                    <span className="yellow">10</span>
                  </li>
                  <li>
                    Reconcilled Payments:
                    <span className="green">20</span>
                  </li>
                  <li>
                    Total Payments:
                    <span className="blue">100</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Chart;
