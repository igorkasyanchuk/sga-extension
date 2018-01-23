import './RecentDeals.css';

import React, { Component } from 'react';

class RecentDealsRowItem extends Component {

  render() {
    return (
      <div>
        {this.props.value &&
          <div>
            <strong>{this.props.label}: </strong>
            {this.props.value}
          </div>
        }
      </div>
    );
  }

}

export default RecentDealsRowItem;
