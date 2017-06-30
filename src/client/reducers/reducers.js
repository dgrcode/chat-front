'use strict';

import messageReducer from './messageReducer';
import configurationReducer from './configurationReducer';

const defaultState = {
  messages: [],
  configuration: {}
};

export default function reducers (state = defaultState, action) {
  return {
    messages: messageReducer(state.messages, action),
    configuration: configurationReducer(state.configuration, action)
  };
}
