'use strict';

export function createMessageAction (message) {
  return ({
    type: 'MESSAGE',
    payload: message
  });
}
