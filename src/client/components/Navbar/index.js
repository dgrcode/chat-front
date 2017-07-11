'use strict';
import './style.sass';

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
      <div className="navbar">
        <div className="server-name">TITLE</div>
        <button id="toggle-config" onClick={this.toggleConfig}>CFG</button>
      </div>
    );
  }
}
