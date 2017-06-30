'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MenuView from '../MenuView';
import ConfigurationViewContainer from '../../containers/ConfigurationViewContainer';
import ChatView from '../ChatView';

/* DEV ONLY */
const userId = 0;
/* DEV ONLY */

export default class Layout extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired
  }

  render () {
    return (
      <div className="layout">
        <Navbar/>
        <div className="content">
          <MenuView/>
          <ConfigurationViewContainer/>
          <ChatView ws={this.props.ws} userId={userId}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
