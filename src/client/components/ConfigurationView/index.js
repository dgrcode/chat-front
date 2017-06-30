'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigurationView extends React.Component {
  static propTypes = {
    configuration: PropTypes.object.isRequired,
    onChangeSendStyle: PropTypes.func.isRequired
  }

  onChangeSendStyle = evt => {
    this.props.onChangeSendStyle(evt.target.checked);
  }

  render () {
    return (
      <div className="configuration">
        <label>
          <input type="checkbox" onChange={this.onChangeSendStyle}
            checked={this.props.configuration.sendWithEnter}/>
          Send messages with "enter"
        </label>
      </div>
    );
  }
}
