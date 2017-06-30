'use strict';
import './style.sass';

import React from 'react';
import PropTypes from 'prop-types';

export default class WritingBoxView extends React.Component {
  static propTypes = {
    handleSend: PropTypes.func.isRequired,
    sendWithEnter: PropTypes.bool.isRequired
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
      if ((this.ctrl && e.keyCode === 13) ||
          (this.props.sendWithEnter && e.keyCode === 13)) {
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
      <div className="writing-box">
        <textarea value={this.state.message} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Send</button>
      </div>
    );
  }
}
