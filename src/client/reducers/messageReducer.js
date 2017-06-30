'use strict';

export default function messageReducer (state = [], action) {
  switch (action.type) {
  case 'MESSAGE':
    const newMessage = {
      htmlMessage: action.payload.htmlMessage,
      rawMessage: action.payload.rawMessage,
      ownerId: action.payload.user
    };
    return [...state.splice(-100), newMessage];
    break;

  default:
    return state;
  }
}
