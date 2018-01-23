import './App.css';

import React, { Component } from 'react';

class PleaseLogin extends Component {

  render() {
    return (
      <div className="appTabsContainer appPleaseLogin">
        <a href={this.props.server_url + '/account'}>Please login in APP to use this extension.</a>
      </div>
    );
  }

}

export default PleaseLogin;
