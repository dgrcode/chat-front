'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import SettingsIcon from '../SettingsIcon';
import MenuIcon from '../MenuIcon';

export default class Navbar extends React.Component {
  static propTypes = {
    dispatchToggleConfig: PropTypes.func.isRequired
  }

  toggleConfig = () => {
    this.props.dispatchToggleConfig();
  }

  render () {
    return (
      <div className="navbar" id="navbar">
        <MenuIcon onClick={() => {}}/>
        <div className="server-name">TITLE</div>
        <SettingsIcon onClick={this.props.dispatchToggleConfig}/>
      </div>
    );
  }
}
