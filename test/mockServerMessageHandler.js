'use strict';

export default function messageHandler (messageAction) {
  return {
    type: 'MESSAGE',
    payload: {
      rawMessage: messageAction.payload.rawMessage,
      htmlMessage: `<p>${messageAction.payload.rawMessage}</p>`,
      timestamp: new Date(),
      userId: messageAction.payload.userId
    }
  };
}
