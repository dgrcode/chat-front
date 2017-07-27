'use strict';

import { connect } from 'react-redux';
import ConfigurationView from '../components/ConfigurationView';
import { changeSendStyle } from '../actions/configurationActions';
import { setConfigVisibleState } from '../actions/uiActions';

function mapStateToProps (state) {
  return ({
    configuration: state.configuration,
    userName: state.user.name
  });
}

function mapDispatchToProps (dispatch) {
  return ({
    onChangeSendStyle: sendWithEnter => dispatch(changeSendStyle(sendWithEnter)),
    dispatchCloseConfig: () => dispatch(setConfigVisibleState(false))
  });
}

const ConfigurationViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigurationView);

export default ConfigurationViewContainer;
