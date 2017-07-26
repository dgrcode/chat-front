'use strict';

const defaultUi = {
  visibleConfig: false,
  activeWsAddress: null
};

export default function configurationReducer (state = defaultUi, action) {
  switch (action.type) {
  case 'TOGGLE_CONFIG':
    return Object.assign({}, state, {
      visibleConfig: !state.visibleConfig
    });
    break;

  case 'SET_CONFIG_STATE':
    return Object.assign({}, state, {
      visibleConfig: action.payload.isVisible
    });

  case 'SET_ACTIVE_WS':
    return Object.assign({}, state, {
      activeWsAddress: action.payload.wsAddress
    });

  default:
    return state;
  }
}
