'use strict';

import { connect } from 'react-redux';
import ConfigurationView from '../components/ConfigurationView';
import { changeSendStyle } from '../actions/configurationActions';

function mapStateToProps (state) {
  return ({
    configuration: state.configuration,
    isVisible: state.ui.visibleConfig
  });
}

function mapDispatchToProps (dispatch) {
  return ({
    onChangeSendStyle: sendWithEnter => {
      dispatch(changeSendStyle(sendWithEnter));
    }
  });
}

const ConfigurationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationView);

export default ConfigurationViewContainer;
