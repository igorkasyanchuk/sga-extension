import './StatsPanel.css';

import React, { Component } from 'react';

import DealStats from './DealStats.js';

class StatsPanel extends Component {

  render() {
    return (
      <div>
        <div className="loadIconContainer">
          <img src="/images/percentage.png" className ="loadIcon" alt="load"/>
        </div>
        <div className="loadTitle">Current Load</div>
        <div className="loadIconSeparator"></div>
        <div className="currentLoad">
          {this.props.load}
          <span className='percentage'>%</span>
        </div>
        <DealStats deal_stats={this.props.deal_stats} />
      </div>
    );
  }

}

export default StatsPanel;
