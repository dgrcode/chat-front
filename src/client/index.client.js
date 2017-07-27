'use strict';
import './style.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers/reducers';
import App from './components/App';
import { setActiveWs } from './actions/uiActions';
import { sendUserIdToServer } from './actions/communicationActions';
import { toggleConfig, setSidebarsVisibleState } from './actions/uiActions';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const wsAddresses = [
//  'ws://10.0.12.177:4000'
//  'ws://172.27.35.139:4000'
  'wss://10.0.11.111:4000'
// 'ws://10.0.14.11:4000'
// 'ws://172.27.35.95:4000'
  // 'ws://172.27.35.95:4000'
];
const wsConnections = {}; // address -> {name, server}/
/* DEV ONLY */
window.wsConnections = wsConnections;
/* DEV ONLY */

function getCookieMap () {
  return document.cookie.split(';')
    .map(kv => kv.trim())
    .map(kv => [kv.slice(0, kv.indexOf('=')), kv.slice(kv.indexOf('=') + 1)])
    .reduce((acc, [k, v]) => {
      acc[k] = v;
      return acc;
    }, {});
}

function setupConnection (wsAddress) {
  wsConnections[wsAddress] = {};
  wsConnections[wsAddress].ws = new WebSocket(wsAddress);

  wsConnections[wsAddress].ws.onopen = event => {
    const cookies = getCookieMap();
    const userId = cookies.uid;
    const wsAction = sendUserIdToServer(userId);
    event.target.send(JSON.stringify(wsAction));
  };

  wsConnections[wsAddress].ws.onmessage = event => {
    const wsAction = JSON.parse(event.data);
    wsAction.payload.wsAddress = wsAddress;
    store.dispatch(wsAction);
    if (wsAction.type === 'USER_INFO') {
      const cookies = getCookieMap();
      const userId = cookies.uid;
      if (userId === undefined) {
        document.cookie = 'uid=' + wsAction.payload.userId;
      }
    }
  };
}

function addNewConnection (wsAddress) {
  wsAddresses.push(wsAddress);
  setupConnection(wsAddress);
}

const appMapStateToProps = state => ({
  ui: state.ui,
  connection: state.connection,
  user: state.user
});
const appMapDispatchToProps = dispatch => ({
  changeActiveWsServer: wsAddress => dispatch(setActiveWs(wsAddress)),
  dispatchToggleConfig: () => dispatch(toggleConfig()),
  dispatchCloseSidebars: () => dispatch(setSidebarsVisibleState(false))
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
        connectNew={addNewConnection}/>
    </Provider>,
    document.getElementById('root')
  );
};
