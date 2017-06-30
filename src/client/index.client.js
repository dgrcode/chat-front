'use strict';
import './style.sass';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import Layout from './components/Layout';

// TODO server here is hardcoded, but it shuold come from the user or device
const servers = ['ws://localhost:4000'];
const wsConnections = {};

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.onload = function () {
  for (let server of servers) {
    wsConnections[server] = new WebSocket(server);
    wsConnections[server].onmessage = event => {
      const wsAction = JSON.parse(event.data);
      store.dispatch(wsAction);
    };
  }

  ReactDom.render(
    <Provider store={store}>
      <Layout ws={wsConnections[servers[0]]}/>
    </Provider>,
    document.getElementById('root')
  );
};
