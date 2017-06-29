'use strict';

import { connect } from 'react-redux';
import MessagesListView from '../components/MessagesListView';

function mapStateToProps (state) {
  return ({
    messages: state.messages
  });
}

const MessagesListViewContainer = connect(
  mapStateToProps
)(MessagesListView);

export default MessagesListViewContainer;
