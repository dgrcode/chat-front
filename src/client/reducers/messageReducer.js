'use strict';

export default function messageReducer (state = [], action) {
  switch (action.type) {
  case 'MESSAGE':
    return [...state.splice(-100), action.payload];
    break;

  default:
    return state;
  }
}
