'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigurationView extends React.Component {
  static propTypes = {
    configuration: PropTypes.object.isRequired,
    // TODO do I use `isVisible`?
    isVisible: PropTypes.bool.isRequired,
    onChangeSendStyle: PropTypes.func.isRequired,
    connectNew: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    userName: PropTypes.string
  }

  constructor (props) {
    super(props);
    this.state = {
      connectionInput: '',
      nameInput: ''
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.userName !== '') {
      this.setState({ nameInput: nextProps.userName });
    }
  }

  onChangeSendStyle = evt => {
    this.props.onChangeSendStyle(evt.target.checked);
  }

  handleConnectionInputChange = evt => {
    this.setState({ connectionInput: evt.target.value });
  }

  handleNameInputChange = evt => {
    this.setState({ nameInput: evt.target.value });
  }

  handleConnect = () => {
    this.props.connectNew(this.state.connectionInput);
    this.setState({ connectionInput: '' });
  }

  handleChangeName = () => {
    this.props.changeName(this.state.nameInput);
  }

  render () {
    return (
      <div className="configuration" id="configuration">
        <em>{`Hi ${this.props.userName}!`}</em>
        <h3>Name</h3>
        Set your name:
        <label>
          <input type="text"
            onChange={this.handleNameInputChange}
            value={this.state.nameInput}/>
          <button onClick={this.handleChangeName}>Submit</button>
        </label>
        <h3>Connections</h3>
        Add new connection:
        <label>
          <input type="text"
            onChange={this.handleConnectionInputChange}
            value={this.state.connectionInput}/>
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
