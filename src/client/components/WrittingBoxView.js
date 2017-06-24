'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class WrittingBoxView extends React.Component {
  static propTypes = {
    handleSend: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      message: ''
    };
  }
  componentDidMount = () => {
    document.onkeydown = (e) => {
      if (e.keyCode === 17) {
        this.ctrl = true;
      }
      if (this.ctrl && e.keyCode === 13) {
        this.handleClick();
      }
    };
    document.onkeyup = (e) => {
      if (e.keyCode === 17) {
        this.ctrl = false;
      }
    };
  }

  componentWillUnmount () {
    console.log('removes the listener');
    document.onkeydown = undefined;
    document.onkeyup = undefined;
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleClick = () => {
    this.props.handleSend(this.state.message);
    this.setState({ message: '' });
  }

  render () {
    return (
      <div>
        <textarea value={this.state.message} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}
