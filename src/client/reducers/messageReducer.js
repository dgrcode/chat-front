'use strict';

export default function messageReducer (state = [], action) {
  switch (action.type) {
  case 'MESSAGE':
    const newMessage = {
      htmlMessage: action.payload.htmlMessage,
      rawMessage: action.payload.rawMessage,
      userId: action.payload.userId,
      timestamp: action.payload.timestamp
    };
    return [...state.splice(-100), newMessage];
    break;

  case 'MESSAGE_GROUP':
    const newMessageGroup = action.payload.map(v => ({
      htmlMessage: v.htmlMessage,
      rawMessage: v.rawMessage,
      userId: v.userId,
      timestamp: v.timestamp
    }));
    return [...state.splice(-100), ...newMessageGroup];

  default:
    return state;
  }
}
