'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class MessagesView extends React.Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  render () {
    return (
      <div>
        {
          this.props.messages
            .map((msg, idx) => <div key={idx} className="message">{msg}</div>)
        }
      </div>
    );
  }
}
