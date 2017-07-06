'use strict';

const defaultUi = {
  visibleConfig: false
};

export default function configurationReducer (state = defaultUi, action) {
  switch (action.type) {
  case 'TOGGLE_CONFIG':
    return Object.assign({}, state, {
      visibleConfig: !state.visibleConfig
    });
    break;

  default:
    return state;
  }
}
