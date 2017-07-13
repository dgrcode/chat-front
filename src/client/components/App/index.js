'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from '../../containers/NavbarContainer';
import Footer from '../Footer';
import MenuView from '../MenuView';
import ConfigurationViewContainer from '../../containers/ConfigurationViewContainer';
import ChatViewContainer from '../../containers/ChatViewContainer';

/* DEV ONLY */
const userId = 0;
/* DEV ONLY */

export default class App extends React.Component {
  static propTypes = {
    wsAddresses: PropTypes.array.isRequired,
    wsConnections: PropTypes.object.isRequired,
    userIdNames: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    connection: PropTypes.object.isRequired,
    changeActiveWsServer: PropTypes.func.isRequired,
    connectNew: PropTypes.func.isRequired
  }

  changeActiveWsServer = wsAddress => {
    this.props.changeActiveWsServer(wsAddress);
  }

  handleConnectNew = (wsAddress) => {
    this.props.connectNew(wsAddress);
    this.forceUpdate();
  }

  render () {
    const visibleConfig = this.props.ui.visibleConfig;
    const ws = this.props.wsConnections[this.props.ui.activeWsAddress].ws;
    const wsNames = this.props.wsAddresses
      .map(wsAddress => ({
        address: wsAddress,
        name: this.props.connection[wsAddress] ? this.props.connection[wsAddress].name : '...'
      }));
    return (
      <div className="layout">
        <NavbarContainer/>
        <div className="content">
          <div className="main-content">
            <MenuView
              wsNames={wsNames}
              changeActiveWsServer={this.changeActiveWsServer}/>
            <ChatViewContainer ws={ws} userId={userId} userIdNames={this.props.userIdNames}/>
          </div>
          <div className={`secondary-content ${visibleConfig ? 'visible' : 'hidden'}`}>
            <ConfigurationViewContainer connectNew={this.handleConnectNew}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
