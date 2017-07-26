'use strict';

export const toggleConfig = () => ({
  type: 'TOGGLE_CONFIG'
});

export const setConfigVisibleState = (isVisible) => ({
  type: 'SET_CONFIG_STATE',
  payload: {
    isVisible
  }
});

export const setActiveWs = wsAddress => ({
  type: 'SET_ACTIVE_WS',
  payload: {
    wsAddress
  }
});
