'use strict';

export default function WebSocket () {
  this.send = function (message) {
    console.log('sent message:', message);
  };
}
