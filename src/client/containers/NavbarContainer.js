'use strict';

import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { toggleConfig } from '../actions/uiActions';

function mapStateToProps (state) {
  return ({
    connection: state.connection,
    activeWsAddress: state.ui.activeWsAddress
  });
}

function mapDispatchToProps (dispatch) {
  return ({
    dispatchToggleConfig: () => {
      dispatch(toggleConfig());
    }
  });
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;
