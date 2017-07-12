'use strict';

import { connect } from 'react-redux';
import MessagesListView from '../components/MessagesListView';

function mapStateToProps (state) {
  return ({
    activeWs: state.ui.activeWsAddress,
    messages: state.messages[state.ui.activeWsAddress] || []
  });
}

const MessagesListViewContainer = connect(
  mapStateToProps
)(MessagesListView);

export default MessagesListViewContainer;
