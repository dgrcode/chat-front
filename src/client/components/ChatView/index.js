'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import MessagesListViewContainer from '../../containers/MessagesListViewContainer';
import WritingBoxView from '../WritingBoxView';
import { createMessageAction } from '../../actions/messageActions';

export default class ChatView extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired,
    userIdNames: PropTypes.object.isRequired,
    sendWithEnter: PropTypes.bool.isRequired,
    messageHistory: PropTypes.array.isRequired,
    dispatchMessageToHistory: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    this.fakeUser = 0;
  }

  handleSend = (message) => {
    const ws = this.props.ws;
    const user = ++this.fakeUser % 3;
    const messageAction = createMessageAction(message, user);
    this.props.dispatchMessageToHistory(message);
    ws.send(JSON.stringify(messageAction));
  }

  render () {
    return (
      <div className="chat">
        <MessagesListViewContainer userId={this.props.userId}
          userIdNames={this.props.userIdNames}/>
        <WritingBoxView
          handleSend={this.handleSend}
          messageHistory={this.props.messageHistory}
          sendWithEnter={this.props.sendWithEnter}/>
      </div>
    );
  }
}
