'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import MessagesListViewContainer from '../containers/MessagesListViewContainer';
import WritingBoxView from './WritingBoxView';
import { createMessageAction } from '../actions/messageActions';

export default class ChatView extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired
  }

  handleSend = (message) => {
    const ws = this.props.ws;
    const messageAction = createMessageAction(message);
    ws.send(JSON.stringify(messageAction));
  }

  render () {
    return (
      <div className="chat">
        <MessagesListViewContainer userId={this.props.userId}/>
        <WritingBoxView handleSend={this.handleSend}/>
        <div className={'tested'}>{(this.props.ws instanceof WebSocket).toString()}</div>
      </div>
    );
  }
}
