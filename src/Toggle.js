import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <>
      <Button variant="primary" onClick={this.handleClick} style={{fontSize:18, marginTop:12, textAlign:'center', marginRight:8}}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </Button>
      </>
    );
  }
}
