'use strict';

const defaultConfiguration = {
  sendWithEnter: false
};

export default function configurationReducer (state = defaultConfiguration, action) {
  switch (action.type) {
  case 'CONFIG_SEND_STYLE':
    return Object.assign({}, state, {
      sendWithEnter: action.payload.sendWithEnter
    });
    break;

  default:
    return state;
  }
}
