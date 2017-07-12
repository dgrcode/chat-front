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
    connectNew: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      // TODO this is currently hardcoded but shuold be set with some logic
      activeServerAddress: this.props.wsAddresses[0]
    };
  }

  changeActiveWsServer = wsAddress => {
    console.log('active server changed to:', wsAddress);
    this.setState({ activeServerAddress: wsAddress });
  }

  handlConnectNew = (wsAddress) => {
    this.props.connectNew(wsAddress);
    this.forceUpdate();
  }
  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextState.activeServerAddress === this.state.activeServerAddress) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render () {
    const visibleConfig = this.props.ui.visibleConfig;
    const ws = this.props.wsConnections[this.state.activeServerAddress];
    return (
      <div className="layout">
        <NavbarContainer/>
        <div className="content">
          <div className="main-content">
            <MenuView
              wsNames={this.props.wsAddresses}
              changeActiveWsServer={this.changeActiveWsServer}/>
            <ChatViewContainer ws={ws} userId={userId} userIdNames={this.props.userIdNames}/>
          </div>
          <div className={`secondary-content ${visibleConfig ? 'visible' : 'hidden'}`}>
            <ConfigurationViewContainer connectNew={this.handlConnectNew}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
