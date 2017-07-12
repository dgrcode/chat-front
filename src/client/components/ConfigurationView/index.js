'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigurationView extends React.Component {
  static propTypes = {
    configuration: PropTypes.object.isRequired,
    // TODO do I use `isVisible`?
    isVisible: PropTypes.bool.isRequired,
    onChangeSendStyle: PropTypes.func.isRequired,
    connectNew: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      connectionInput: ''
    };
  }

  onChangeSendStyle = evt => {
    this.props.onChangeSendStyle(evt.target.checked);
  }

  handleConnectionInputChange = evt => {
    this.setState({ connectionInput: evt.target.value });
  }

  handleConnect = () => {
    // TODO check if the ws address is valid and refuse to connect if that's the case
    this.props.connectNew(this.state.connectionInput);
  }

  render () {
    return (
      <div className="configuration" id="configuration">
        <h3>Connections</h3>
        <label>
          Add new connection
          <input type="text" onChange={this.handleConnectionInputChange}/>
          <button onClick={this.handleConnect}>Connect</button>
        </label>

        <br/>
        <h3>Behaviour</h3>
        <label>
          <input type="checkbox" onChange={this.onChangeSendStyle}
            checked={this.props.configuration.sendWithEnter}/>
          Send messages with "enter"
        </label>
      </div>
    );
  }
}
