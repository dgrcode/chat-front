'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';

import MessageView from '../MessageView';

export default class MessagesListView extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired,
    userIdNames: PropTypes.object.isRequired
  }

  componentWillReceiveProps () {
    const isScrolledToBottom = this.list.scrollHeight - this.list.clientHeight < this.list.scrollTop + 3;
    if (isScrolledToBottom) {
      this.moveDownAfterUpdate = true;
    } else {
      this.moveDownAfterUpdate = false;
    }
  }

  componentDidUpdate () {
    if (this.moveDownAfterUpdate) {
      this.list.scrollTop = this.list.scrollHeight - this.list.clientHeight;
    }
  }

  renderMessages () {
    let lastFullDate = 0;
    const content = [];
    let separatorIdx = 0;
    for (let idx = 0; idx < this.props.messages.length; idx++) {
      const msg = this.props.messages[idx];
      const msgFullDate = (new Date(msg.timestamp)).toLocaleDateString();
      if (msgFullDate !== lastFullDate) {
        lastFullDate = msgFullDate;
        content.push(
          <div className="date-separator" key={`separator${separatorIdx++}`}>
            <hr/>
            {msgFullDate}
            <hr/>
          </div>
        );
      }

      content.push(
        <MessageView
          key={idx}
          userName={this.props.userIdNames[msg.userId]}
          messageTime={new Date(msg.timestamp)}
          isFromUser={this.props.userId === msg.userId}>
            {msg.htmlMessage}
        </MessageView>
      );
    }

    return content;
  }

  render () {
    return (
      <div className="messages-list" onScroll={this.handleScroll}
        ref={list => {this.list = list;}}>
        {this.renderMessages()}
      </div>
    );
  }
}
