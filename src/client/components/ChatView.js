'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import MessagesViewContainer from '../containers/MessagesViewContainer';
import WrittingBoxView from './WrittingBoxView';
import { createMessageAction } from '../actions/messageActions';

export default class ChatView extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired
  }

  handleSend = (message) => {
    const ws = this.props.ws;
    const messageAction = createMessageAction(message);
    ws.send(JSON.stringify(messageAction));
  }

  render () {
    return (
      <div>
        <MessagesViewContainer/>
        <WrittingBoxView handleSend={this.handleSend}/>
      </div>
    );
  }
}
