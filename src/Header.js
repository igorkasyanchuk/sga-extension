import logo from './logo.svg';

import './App.css';

import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <div className="AppHeader">
        <a href={this.props.server_url} target="_blank">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
    );
  }

}

export default Header;
