'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';
import settingsSvg from '../../assets/settingsSvg';

const SettingsIcon = (props) => (
  <div onClick={props.onClick} role="button"
    className={`settings-button ${props.visibleConfig ? 'configuration-open' : ''}`}>
    {settingsSvg}
  </div>
);

SettingsIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  visibleConfig: PropTypes.bool.isRequired
};

export default SettingsIcon;
