import React, { PureComponent } from 'react';

export class LoadingIndicator extends PureComponent {
  render() {
    return (
      <div className='skeleton-container'>
        <div className='loader'>
          <svg className='spinner' viewBox="0 0 150 150">
            <circle className='spinner-inner' cx="75" cy="75" r="60" />
          </svg>
          <p className='loader-text'>Loading data...</p>
        </div>
      </div>
    )
  }
}