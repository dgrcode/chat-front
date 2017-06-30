'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import MessageView from '../MessageView';

export default class MessagesListView extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired
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

  render () {
    return (
      <div className="messages-list" onScroll={this.handleScroll}
        ref={list => {this.list = list;}}>
        {
          this.props.messages
            .map((msg, idx) =>
            <MessageView
              key={idx}
              isFromUser={this.props.userId === msg.ownerId}>
                {msg.htmlMessage}
            </MessageView>)
        }
      </div>
    );
  }
}
