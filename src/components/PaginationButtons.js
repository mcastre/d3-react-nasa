import React, { Component } from 'react';

export class PaginationButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { isDefaultActive: true };
    this.activate = this.activate.bind(this);
  }

  activate(val) {
    const { clickHandler } = this.props;
    this.setState({isDefaultActive: false});
    clickHandler(val);
  }

  render() {
    const { isDefaultActive } = this.state;
    // Handles adding/removing 'focus' state on the first pagination button,
    // the rest is handled by CSS
    const activeStyle = isDefaultActive ? {
      'backgroundColor': '#9F4BFD', 
      'color': 'white'
    } : null;

    return (
      <div className='app-button-group'>
        <button type='button' onClick={() => this.activate(10)} className='app-button app-button-outline' style={activeStyle}>10</button>
        <button type='button' onClick={() => this.activate(25)} className='app-button app-button-outline'>25</button>
        <button type='button' onClick={() => this.activate(50)} className='app-button app-button-outline'>50</button>
        <button type='button' onClick={() => this.activate(100)} className='app-button app-button-outline'>100</button>
        <button type='button' onClick={() => this.activate('ALL')} className='app-button app-button-outline'>All</button>
      </div>
    );
  }
}