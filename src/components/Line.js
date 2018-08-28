import React, { Component } from 'react';
import { scaleTime, scaleLinear } from 'd3-scale';
import { extent, max } from 'd3-array';
import { line } from 'd3-shape';

import { Points } from './Points';
import { PointToolTip } from './PointToolTip';

export class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: {
        show: false, 
        data: {
          key: '',
          value: ''
        }
      }
    };
  }

  showToolTip = (e) => {
    e.target.setAttribute('fill', '#8836E3');

    this.setState({
      tooltip: {
        display: true,
        data: {
          key: e.target.getAttribute('data-key'),
          value: e.target.getAttribute('data-value')
        },
        pos: {
          x: e.target.getAttribute('cx'),
          y: e.target.getAttribute('cy')
        } 
      }
    })
  }

  // onMouseLeave not working for some reason
  hideTooltip = (e) => {
    e.target.setAttribute('fill', '#9F4BFD');
    this.setState({
      tooltip: {
        display: false,
        data: { key: '', value: '' }
      }
    });
  }

  render() {
    const { data, margin, width, height } = this.props;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.bottom - margin.top;

    const x = scaleTime().range([0, chartWidth]);
    const y = scaleLinear().range([chartHeight, 0]);

    const chartLine = line()
      .x(d => x(new Date(d.date_time_peak_brightness_ut)))
      .y(d => y(d.calculated_total_impact_energy_kt));
    
    const xExtent = extent(data.map(d => new Date(d.date_time_peak_brightness_ut))),
          xRange = xExtent[1] - xExtent[0];      

    const xDomain = [xExtent[0] - (xRange * .05), xExtent[1] - (xRange * .005)];
    const yDomain = [0, max(data, (d) => d.calculated_total_impact_energy_kt)];
    
    x.domain(xDomain);
    y.domain(yDomain);

    return(
      <g>
        <path
          className='line'
          d={chartLine(data)}>
        </path>

        <Points 
          data={data} 
          x={x} 
          y={y}
          handleShowToolTip={this.showToolTip}
          handleHideToolTip={this.hideToolTip} />

        <PointToolTip tooltip={this.state.tooltip} />
      </g>
    );
  }
};