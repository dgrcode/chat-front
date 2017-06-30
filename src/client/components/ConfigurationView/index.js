'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class ConfigurationView extends React.Component {
  static propTypes = {
    configuration: PropTypes.object.isRequired,
    onChangeSendStyle: PropTypes.func.isRequired
  }

  onChangeSendStyle = evt => {
    console.log('zup?');
    this.props.onChangeSendStyle(evt.target.checked);
  }

  render () {
    return (
      <div className="configuration">
        <label>
          <input type="checkbox" onChange={this.onChangeSendStyle}/>
          Send messages with "enter"
        </label>
      </div>
    );
  }
}
