'use strict';

import messageReducer from './messageReducer';
import configurationReducer from './configurationReducer';
import messageHistoryReducer from './messageHistoryReducer';

export default function reducers (state = {}, action) {
  return {
    messages: messageReducer(state.messages, action),
    messageHistory: messageHistoryReducer(state.messageHistory, action),
    configuration: configurationReducer(state.configuration, action)
  };
}
