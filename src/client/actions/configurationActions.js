'use strict';

export function changeSendStyle (sendWithEnter) {
  return ({
    type: 'CONFIG_SEND_STYLE',
    payload: {
      sendWithEnter
    }
  });
}
