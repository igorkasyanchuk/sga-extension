import './DealStats.css';

import React, { Component } from 'react';

class DealStats extends Component {

  render() {
    return (
      <div className="dealStatsContainerPlaceholder">
        <div className="dealStatsTitle">Last 30 days Deals Stats</div>
        <div className="dealStatsSeparator"></div>
        <div className="dealStatsContainer">
          <div className="statLabel won">
            {this.props.deal_stats.won}
            <span>Won</span>
          </div>
          <div className="statLabel lost">
            {this.props.deal_stats.lost}
            <span>Lost</span>
          </div>
        </div>
      </div>
    );
  }

}

export default DealStats;
