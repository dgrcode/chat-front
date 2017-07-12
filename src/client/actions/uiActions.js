'use strict';

export const toggleConfig = () => ({
  type: 'TOGGLE_CONFIG'
});

export const setActiveWs = wsAddress => ({
  type: 'SET_ACTIVE_WS',
  payload: {
    wsAddress
  }
});
