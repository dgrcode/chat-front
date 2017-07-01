'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';

export default class MessageView extends React.Component {
  static propTypes = {
    isFromUser: PropTypes.bool.isRequired,
    messageOwner: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
  }

  render () {
    return (
      <div
        className={`message ${this.props.isFromUser ? 'from-user' : 'from-another'}`}>
        {this.props.isFromUser ? null : <div className="message-owner">{this.props.messageOwner}</div>}
        <div className="message-content"
          dangerouslySetInnerHTML={{ __html: this.props.children }}/>
      </div>
    );
  }
}
