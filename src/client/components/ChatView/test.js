'use strict';
/* global describe, it, expect */
import '../../../../test/dummyWebSocketInjector';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers/reducers';
import { createMessageAction } from '../../actions/messageActions';
import { mount } from 'enzyme';
import ChatView from './index';
import WebSocket from '../../../../test/dummyWebSocket';

const store = createStore(reducers);
const dummyUserId = 0;
const component = mount(
  <Provider store={store}>
    <ChatView ws={new WebSocket()} userId={dummyUserId}/>
  </Provider>
  );
const dummyMessages = [
  createMessageAction('a', 0),
  createMessageAction('b', 1),
  createMessageAction('c', 2),
  createMessageAction('d', 0),
  createMessageAction('e', 1),
  createMessageAction('f', 2)
];

describe('The ChatView component', () => {
  it('renders itself', () => {
    expect(component.find('.chat').length).toBe(1);
  });

  describe('should initialize with an empty list of messages and the writing box', () => {
    it('has one messages list component', () => {
      expect(component.find('.messages-list').length).toBe(1);
    });
    it('has one writing box component', () => {
      expect(component.find('.writing-box').length).toBe(1);
    });
    it('has one writing box component', () => {
      expect(component.find('.message').length).toBe(0);
    });
  });

  it('should render as many messages as there are in the state', () => {
    for (let messageAction of dummyMessages) {
      store.dispatch(messageAction);
    }
    expect(component.find('.message').length).toBe(dummyMessages.length);
  });
});
