'use strict';

export function createMessageAction (message, user) {
  return ({
    type: 'MESSAGE',
    payload: {
      message,
      user
    }
  });
}
