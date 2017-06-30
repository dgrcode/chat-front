'use strict';

export function createMessageAction (rawMessage, user) {
  return ({
    type: 'MESSAGE',
    payload: {
      rawMessage,
      user
    }
  });
}
