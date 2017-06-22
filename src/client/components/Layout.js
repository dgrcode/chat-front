'use strict';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MenuView from './MenuView';
import ConfigurationView from './ConfigurationView';
import ChatView from './ChatView';


export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
        <MenuView/>
        <ConfigurationView/>
        <ChatView/>
        <Footer/>
      </div>
    );
  }
}
