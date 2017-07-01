'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import MessagesListViewContainer from '../../containers/MessagesListViewContainer';
import WritingBoxViewContainer from '../../containers/WritingBoxViewContainer';
import { createMessageAction } from '../../actions/messageActions';

export default class ChatView extends React.Component {
  static propTypes = {
    ws: PropTypes.instanceOf(WebSocket).isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired,
    userIdNames: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    this.fakeUser = 0;
  }

  handleSend = (message) => {
    const ws = this.props.ws;
    const user = ++this.fakeUser % 3;
    const messageAction = createMessageAction(message, user);
    ws.send(JSON.stringify(messageAction));
  }

  render () {
    return (
      <div className="chat">
        <MessagesListViewContainer userId={this.props.userId}
          userIdNames={this.props.userIdNames}/>
        <WritingBoxViewContainer handleSend={this.handleSend}/>
      </div>
    );
  }
}
