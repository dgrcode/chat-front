'use strict';

export default function messageReducer (state = [], action) {
  switch (action.type) {
  case 'MESSAGE':
    const newMessage = {
      message: action.payload.message,
      ownerId: action.payload.user
    }
    return [...state.splice(-100), newMessage];
    break;

  default:
    return state;
  }
}
