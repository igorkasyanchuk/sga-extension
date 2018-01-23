import './App.css';

import React, { Component } from 'react';
import { ReferenceLine, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import * as moment from 'moment';

class TrendsPanel extends Component {

  render() {
    return (
      <div>
        <BarChart width={500} height={300} data={this.props.load_stats}>
          <XAxis dataKey="name"/>
          <YAxis type="number" domain={[0, 100]}/>
          <CartesianGrid strokeDasharray="4 4"/>
          <Tooltip formatter={(value, name, payload) => payload['value'] + '%'}/>
          <Bar dataKey="value" fill="#8884d8"/>
          <ReferenceLine isFront="true" x={moment().format("MMM YY")} stroke="red" />
        </BarChart>
      </div>
    );
  }

}

export default TrendsPanel;
