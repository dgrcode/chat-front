'use strict';

import messageReducer from './messageReducers';

const defaultState = {
  messages: []
};

export default function reducers (state = defaultState, action) {
  return {
    messages: messageReducer(state.messages, action)
  };
}
