'use strict';

export function changeSendStyle (sendWithEnter) {
  return ({
    type: 'CONFIG_SEND_STYLE',
    payload: {
      sendWithEnter
    }
  });
}

export function nameChangeAction (name, userId) {
  return ({
    type: 'NAME_CHANGE',
    payload: {
      name,
      userId
    }
  });
}
