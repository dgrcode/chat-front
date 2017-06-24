'use strict';

import messageReducer from './messageReducers';

export default function reducers (state = [], action) {
  return messageReducer(state, action);
}
