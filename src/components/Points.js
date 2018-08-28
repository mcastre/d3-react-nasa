import React, { Component } from 'react';

export class Points extends Component {
  render() {
    const { data, x, y, handleShowToolTip, handleHideToolTip } = this.props;

    const dots = data.map((d, i) => {
      return (
        <circle
          key={i}
          className='dot'
          r={3}
          cx={x(new Date(d.date_time_peak_brightness_ut))}
          cy={y(d.calculated_total_impact_energy_kt)}
          onMouseOver={handleShowToolTip} 
          onMouseOut={handleHideToolTip}
          data-key={new Date(d.date_time_peak_brightness_ut)} 
          data-value={d.calculated_total_impact_energy_kt}>
        </circle>
      )
    });

    return (
      <g>
        {dots}
      </g>
    );
  }
};