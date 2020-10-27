import React from 'react';
import SmallChart from '../assets/images/icons/small-chart.png';

function Stats() {
  return (
    <section className="stats">
      <div className="stats-card">
        <div>
          <h6>Daily Transaction Value</h6>
          <h5>2,342</h5>
        </div>
        <img src={SmallChart} alt="Chart" />
      </div>
      <div className="stats-card">
        <div>
          <h6>Daily Transaction Value</h6>
          <h5>&#8358;4,000,000</h5>
        </div>
        <img src={SmallChart} alt="Chart" />
      </div>
      <div className="stats-card">
        <div>
          <h6>Daily Transaction Value</h6>
          <h5>452,000</h5>
        </div>
        <img src={SmallChart} alt="Chart" />
      </div>
      <div className="stats-card">
        <div>
          <h6>Daily Transaction Value</h6>
          <h5>&#8358;4,000,000</h5>
        </div>
        <img src={SmallChart} alt="Chart" />
      </div>
    </section>
  )
}

export default Stats;
