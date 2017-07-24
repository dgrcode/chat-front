'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import logoSvg from '../../assets/logoSvg';

export default class MenuView extends React.Component {
  static propTypes = {
    wsNames: PropTypes.array.isRequired,
    changeActiveWsServer: PropTypes.func.isRequired,
    dispatchToggleConfig: PropTypes.func.isRequired
  }

  handleClick (idx) {
    // TODO actually wsNames will have to be another thing. Probably the whole
    // connection object.
    this.props.changeActiveWsServer(this.props.wsNames[idx].address);
  }

  render () {
    return (
      <div className="menu" id="menu">
        {logoSvg}
        {
          this.props.wsNames.map((wsInfo, idx) =>
          (<button className="ws-info" key={idx}>
            <div
              className="ws-name"
              onClick={this.handleClick.bind(this, idx)}>
                {wsInfo.name}
            </div>
            <em className="ws-address">{wsInfo.address}</em>
          </button>)
          )
        }
        <button className="button-add-server" onClick={this.props.dispatchToggleConfig}>Add</button>
      </div>
    );
  }
}
