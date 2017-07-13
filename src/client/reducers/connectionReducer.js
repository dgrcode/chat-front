'use strict';

export default function connectionReducer (state = {}, action) {
  switch (action.type) {
  case 'HANDSHAKE':
    const updatedState = {};
    updatedState[action.payload.wsAddress] = {
      name: action.payload.name,
      isConnected: true
    };
    return Object.assign({}, state, updatedState);

  default:
    return state;
  }
}
