'use strict';
import './style.sass';
import settingsSvg from '../../assets/settingsSvg';

import React from 'react';
import PropTypes from 'prop-types';

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
        <div className="server-name">TITLE</div>
        <button id="toggle-config" onClick={this.toggleConfig}>{settingsSvg}</button>
      </div>
    );
  }
}
