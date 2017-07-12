'use strict';
import './style.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers/reducers';
import App from './components/App';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const wsAddresses = ['ws://localhost:4000'];
const wsConnections = {}; // address -> server

function setupConnection (wsAddress) {
  wsConnections[wsAddress] = new WebSocket(wsAddress);
  wsConnections[wsAddress].onmessage = event => {
    const wsAction = JSON.parse(event.data);
    store.dispatch(wsAction);
  };
}

function addNewConnection (wsAddress) {
  wsAddresses.push(wsAddress);
  setupConnection(wsAddress);
}


/* ONLY DEV */
const userIdNames = {
  0: 'Dani',
  1: 'Laura',
  2: 'Peter'
};
/* ONLY DEV */

const appMapStateToProps = state => ({
  ui: state.ui
});
const AppContainer = connect(appMapStateToProps)(App);

window.onload = function () {
  for (let address of wsAddresses) {
    setupConnection(address);
  }

  ReactDom.render(
    <Provider store={store}>
      <AppContainer
        wsAddresses={wsAddresses}
        wsConnections={wsConnections}
        userIdNames={userIdNames}
        connectNew={addNewConnection}/>
    </Provider>,
    document.getElementById('root')
  );
};
