'use strict';

import messageReducer from './messageReducer';
import configurationReducer from './configurationReducer';

export default function reducers (state = {}, action) {
  return {
    messages: messageReducer(state.messages, action),
    configuration: configurationReducer(state.configuration, action)
  };
}
