'use strict';

import { connect } from 'react-redux';
import MessagesView from '../components/MessagesView';

function mapStateToProps (state) {
  return ({
    messages: state
  });
}

const MessagesViewContainer = connect(
  mapStateToProps
)(MessagesView);

export default MessagesViewContainer;
