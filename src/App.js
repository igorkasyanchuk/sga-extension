import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';
import { Classes, Tabs, Tab } from "@blueprintjs/core";
import StatsPanel from './StatsPanel.js';
import TrendsPanel from './TrendsPanel.js';
import PeoplePanel from './PeoplePanel.js';
import Loading from './Loading.js';
import PleaseLogin from './PleaseLogin.js';
import Header from './Header.js';
import RecentDeals from './RecentDeals.js';

import DATA from './data/all.json';
const SERVER_URL = "http://storyteller.storyteller.com:3000";

//const SERVER_URL = "https://solutions.softserveinc.com";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      status: 'pending',
      utilization: [],
      load_stats: {},
      recent_deals: [],
      deal_stats: {}
    }
  }

  componentDidMount() {
    // var self = this;
    // axios.get('https://solutions.softserveinc.com/account/api/all', { withCredentials: true })
    //   .then(function (response) {
    //     console.log(response);
    //     self.setState({
    //       loading: false, 
    //       status: 'finished',
    //       load: response.data.current_load.toFixed(2).replace(/\.?0*$/g,''),
    //       current_utilization: response.data.current_utilization,
    //       future_utilization: response.data.future_utilization,
    //       load_stats: response.data.load_stats,
    //       recent_deals: response.data.recent_deals,
    //       deal_stats: response.data.deal_stats
    //     });
    //   })
    //   .catch(function (error) {
    //     self.setState({
    //       loading: false, 
    //       status: 'error'
    //     });
    //   });
    this.setState({
      loading: false,
      status: 'finished',
      load: DATA.current_load.toFixed(2).replace(/\.?0*$/g,''),
      future_utilization: DATA.future_utilization,
      current_utilization: DATA.current_utilization,
      load_stats: DATA.load_stats,
      recent_deals: DATA.recent_deals,
      deal_stats: DATA.deal_stats
    });
  }

  render() {
    return (
      <div className="App">
        <Header server_url={SERVER_URL} />
        {this.LoadedPanel()}
      </div>
    );
  }

  LoadedPanel() {
    if (this.state.status === 'finished') {
      return (
        <div className="appTabsContainer">
          <Tabs id="Tabs" className={Classes.LARGE} onChange={this.handleTabChange.bind(this)}>
            <Tab id="statistics" title="Statistics" panel={<StatsPanel load={this.state.load} deal_stats={this.state.deal_stats}/>} />
            <Tab id="trends" title="Trends" panel={<TrendsPanel load_stats={this.state.load_stats}/>} />
            <Tab id="resources_current" title="TODAY Not Utilized" panel={<PeoplePanel server_url={SERVER_URL} collection={this.state.current_utilization}/>} />
            <Tab id="resources_future" title="+2 Weeks Not Utilized" panel={<PeoplePanel server_url={SERVER_URL} collection={this.state.future_utilization}/>} />
            <Tab id="recent_deals" title="Recent Deals" panel={<RecentDeals server_url={SERVER_URL} collection={this.state.recent_deals}/>} />
          </Tabs>
        </div>  
      );
    } else {
      if (this.state.loading) {
        return <Loading />;
      } else {
        return <PleaseLogin server_url={ SERVER_URL } />;
      }
    }
  }

  handleTabChange(activeTabId) {
    this.setState({ activeTabId });
  }

}

export default App;
