import './PeoplePanel.css';

import React, { Component } from 'react';
import { Card } from "@blueprintjs/core";
import _ from 'lodash';

class PeoplePanel extends Component {

  render() {
    var self = this;
    const people = this.props.collection.map(function(value) {
      const avatarInfo       = value.avatar ? <img alt='' src={self.props.server_url + value.avatar}/> : "";
      const cityInfo         = value.city !== '' ? <p className='cityInfo'>{value.city}</p> : "";
      const technologiesInfo = value.technologies.length > 0 ? <p className='technologiesInfo'>{_.join(value.technologies, ', ')}</p> : "";

      return (
        <Card interactive={true} elevation={Card.ELEVATION_TWO} className="personItem">
          <div className="personItemAvatar">
            {avatarInfo}
          </div>
          <div className="personItemFullName">
            <h4>
              <a href={value.url} target="_blank">{value.full_name}</a>
            </h4>
            {cityInfo}
            {technologiesInfo}
          </div>
          <div className="personItemLoad">
            <h3>{value.load}%</h3>
          </div>
        </Card>
      );
    });

    return (
      <div>
        {people}
      </div>
    );
  }

}

export default PeoplePanel;
