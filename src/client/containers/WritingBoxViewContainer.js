'use strict';

import { connect } from 'react-redux';
import WritingBoxView from '../components/WritingBoxView';

function mapStateToProps (state) {
  return ({
    sendWithEnter: state.configuration.sendWithEnter
  });
}

const WritingBoxViewContainer = connect(
  mapStateToProps
)(WritingBoxView);

export default WritingBoxViewContainer;
