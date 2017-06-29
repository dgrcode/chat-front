'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import MenuView from './MenuView';
import ConfigurationView from './ConfigurationView';
import ChatView from './ChatView';


export default class Layout extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired
  }

  render () {
    return (
      <div className="layout">
        <Navbar/>
        <MenuView/>
        <ConfigurationView/>
        <ChatView ws={this.props.ws}/>
        <Footer/>
      </div>
    );
  }
}
