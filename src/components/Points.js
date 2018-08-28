import React, { Component } from 'react';
import { getMonthNames } from '../helpers/getMonthNames';

export class Points extends Component {
  render() {
    const { data, x, y, handleShowToolTip, handleHideToolTip } = this.props;
    const formatDateKey = (date) => {
      let year = date.getFullYear(),
          month = getMonthNames(date.getMonth()),
          day = date.getDay();
  
      return `${month} ${day}, ${year}`;
    };

    const dots = data.map((d, i) => {
      return (
        <circle
          key={i}
          className='dot'
          r={4}
          cx={x(new Date(d.date_time_peak_brightness_ut))}
          cy={y(d.calculated_total_impact_energy_kt)}
          onMouseEnter={handleShowToolTip} 
          onMouseLeave={handleHideToolTip}
          data-key={formatDateKey(new Date(d.date_time_peak_brightness_ut))} 
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