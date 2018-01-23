import './RecentDeals.css';

import React, { Component } from 'react';
import { Card } from "@blueprintjs/core";
import _ from 'lodash';
import * as moment from 'moment';
import RecentDealsRowItem from './RecentDealsRowItem.js';

class RecentDeals extends Component {

  // Schema
  // id
  // title
  // project_type
  // vertical
  // deal_type
  // url
  // created_on

  render() {
    const content = this.props.collection.map(function(deal) {
      return (
        <Card interactive={true} elevation={Card.ELEVATION_TWO} className="dealItem">
          <div className="dealTitle">
            <h4>
              <a href={deal.url} target='_blank'>{deal.title}</a>
            </h4>
          </div>
          <div className="dealColumns">
            <div className="dealColumn">
              <RecentDealsRowItem label='Type' value={deal.project_type} />
              <RecentDealsRowItem label='Vertical' value={deal.vertical} />
              <RecentDealsRowItem label='Deal Type' value={deal.deal_type} />
              <RecentDealsRowItem label='Date' value={moment(deal.created_on).format('MMMM DD YYYY')} />
            </div>
            <div className="dealColumn dealColumnRight">
              <RecentDealsRowItem label='Driver' value={deal.driver_name} />
              <RecentDealsRowItem label='CSL' value={deal.csl_name} />
              <RecentDealsRowItem label='Tech' value={_.join(deal.technologies, ', ')} />
              <RecentDealsRowItem label='Support' value={_.join(deal.support, ', ')} />
            </div>
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
