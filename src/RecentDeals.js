import './Deals.css';

import React, { Component } from 'react';
import { Card } from "@blueprintjs/core";
import _ from 'lodash';

class RecentDeals extends Component {

  render() {
    var self = this;
    const content = this.props.collection.map(function(deal) {
      return (
        <Card interactive={true} elevation={Card.ELEVATION_TWO} className="dealItem">
          <div className="dealTitle">
            {deal.title}
          </div>
        </Card>
      );
    });

    return (
      <div>
        {content}
      </div>
    );
  }

}

export default RecentDeals;
