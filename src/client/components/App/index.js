'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
//import NavbarContainer from '../../containers/NavbarContainer';
import MenuView from '../MenuView';
import SettingsIcon from '../SettingsIcon';
import ConfigurationViewContainer from '../../containers/ConfigurationViewContainer';
import ChatViewContainer from '../../containers/ChatViewContainer';
import { nameChangeAction } from '../../actions/configurationActions';

export default class App extends React.Component {
  static propTypes = {
    wsAddresses: PropTypes.array.isRequired,
    wsConnections: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    connection: PropTypes.object.isRequired,
    changeActiveWsServer: PropTypes.func.isRequired,
    dispatchToggleConfig: PropTypes.func.isRequired,
    connectNew: PropTypes.func.isRequired
  }

  changeActiveWsServer = wsAddress => {
    this.props.changeActiveWsServer(wsAddress);
  }

  handleConnectNew = (wsAddress) => {
    // TODO check if the ws address is valid and refuse to connect if that's the case
    this.props.connectNew(wsAddress);
    this.forceUpdate();
  }

  changeName = (name) => {
    for (let wsAddress in this.props.wsConnections) {
      this.props.wsConnections[wsAddress].ws.send(
        JSON.stringify(nameChangeAction(name, this.props.user.id))
      );
    }
  }

  render () {
    const visibleConfig = this.props.ui.visibleConfig;
    const ws = this.props.wsConnections[this.props.ui.activeWsAddress].ws;
    const wsNames = this.props.wsAddresses
      .map(wsAddress => ({
        address: wsAddress,
        name: this.props.connection[wsAddress] ? this.props.connection[wsAddress].serverName : '...'
      }));
    return (
      <div className="layout">
        <div className="content">
          <div className="main-content">
            <MenuView
              wsNames={wsNames}
              changeActiveWsServer={this.changeActiveWsServer}
              dispatchToggleConfig={this.props.dispatchToggleConfig}/>
            <ChatViewContainer
              ws={ws}
              user={this.props.user}/>
          </div>
          <div className={`secondary-content ${visibleConfig ? 'visible' : 'hidden'}`}>
            <SettingsIcon visibleConfig={visibleConfig} onClick={this.props.dispatchToggleConfig}/>
            <ConfigurationViewContainer
              connectNew={this.handleConnectNew}
              changeName={this.changeName}/>
          </div>
        </div>
      </div>
    );
  }
}
