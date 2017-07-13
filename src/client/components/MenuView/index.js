'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class MenuView extends React.Component {
  static propTypes = {
    wsNames: PropTypes.array.isRequired,
    changeActiveWsServer: PropTypes.func.isRequired
  }

  handleClick (idx) {
    // TODO actually wsNames will have to be another thing. Probably the whole
    // connection object.
    this.props.changeActiveWsServer(this.props.wsNames[idx].address);
  }

  render () {
    return (
      <div className="menu">
        <h2>Rooms</h2>
        {
          this.props.wsNames.map((wsInfo, idx) =>
          (<div className="ws-info" key={idx}>
            <button
              className="ws-name"
              onClick={this.handleClick.bind(this, idx)}>
                {wsInfo.name}
            </button>
            <em className="ws-address"> - {wsInfo.address}</em>
          </div>)
          )
        }
      </div>
    );
  }
}
