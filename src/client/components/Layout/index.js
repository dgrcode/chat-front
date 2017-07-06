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

export default class Layout extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    userIdNames: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired
  }

  render () {
    const visibleSec = this.props.ui.visibleConfig;
    return (
      <div className="layout">
        <NavbarContainer/>
        <div className="content">
          <div className="main-content">
            <MenuView/>
            <ChatViewContainer ws={this.props.ws} userId={userId} userIdNames={this.props.userIdNames}/>
          </div>
          <div className={`secondary-content ${visibleSec ? 'visible' : 'hidden'}`}>
            <ConfigurationViewContainer/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
