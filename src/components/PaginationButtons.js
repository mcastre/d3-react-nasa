import React, { PureComponent } from 'react';

export class PaginationButtons extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isDefaultActive: true };
  }
  render() {
    const { clickHandler } = this.props;
    const { isDefaultActive } = this.state;
    const activate = (val) => {
      this.setState({isDefaultActive: false});
      clickHandler(val);
    }

    const activeStyle = isDefaultActive ? {
      'backgroundColor': '#9F4BFD', 
      'color': 'white'
    } : null;

    return (
      <div className='app-button-group'>
        <button type='button' onClick={() => activate(10)} className='app-button app-button-outline' style={activeStyle}>10</button>
        <button type='button' onClick={() => activate(25)} className='app-button app-button-outline'>25</button>
        <button type='button' onClick={() => activate(50)} className='app-button app-button-outline'>50</button>
        <button type='button' onClick={() => activate(100)} className='app-button app-button-outline'>100</button>
        <button type='button' onClick={() => activate('ALL')} className='app-button app-button-outline'>All</button>
      </div>
    );
  }
}