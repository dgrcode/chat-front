'use strict';
import './style.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers/reducers';
import App from './components/App';
import { setActiveWs } from './actions/uiActions';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const wsAddresses = ['ws://10.0.12.177:4000'];
const wsConnections = {}; // address -> {name, server}
window.wsConnections = wsConnections;

function setupConnection (wsAddress) {
  wsConnections[wsAddress] = {};
  wsConnections[wsAddress].ws = new WebSocket(wsAddress);
  wsConnections[wsAddress].ws.onmessage = event => {
    const wsAction = JSON.parse(event.data);
    wsAction.payload.wsAddress = wsAddress;
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
  ui: state.ui,
  connection: state.connection
});
const appMapDispatchToProps = dispatch => ({
  changeActiveWsServer: wsAddress => {
    dispatch(setActiveWs(wsAddress));
  }
});
const AppContainer = connect(appMapStateToProps, appMapDispatchToProps)(App);

window.onload = function () {
  for (let address of wsAddresses) {
    setupConnection(address);
  }

  // TODO by default starts with the first ws. Change that?
  store.dispatch(setActiveWs(wsAddresses[0]));

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
