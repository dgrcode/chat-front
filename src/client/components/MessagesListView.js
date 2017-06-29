'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import MessageView from './MessageView';

export default class MessagesListView extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    // TODO define if ownerId will be a string or a number
    userId: PropTypes.number.isRequired
  }

  render () {
    return (
      <div className="messages-list">
        {
          this.props.messages
            .map((msg, idx) =>
            <MessageView
              key={idx}
              isFromUser={this.props.userId === msg.ownerId}>
                {msg.message}
            </MessageView>)
        }
      </div>
    );
  }
}
