import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import { extent } from 'd3-array';
import { scaleTime } from 'd3-scale';
import { select as d3Select } from 'd3-selection';

export class AxisX extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { data, margin, width } = this.props;
    const chartWidth = width - margin.left - margin.right;

    const xExtent = extent(data.map(d => new Date(d.date_time_peak_brightness_ut))),
          xRange = xExtent[1] - xExtent[0];

    const x = scaleTime()
      .range([0, chartWidth])
      .domain([xExtent[0] - (xRange * .05), xExtent[1] - (xRange * .005)]);
    
    const xAxis = d3Axis.axisBottom(x).ticks(5).tickSizeOuter(0);

    d3Select('.x').call(xAxis);

  }

  render() {
    const { margin } = this.props;
    const height = this.props.height - margin.top - margin.bottom;

    return(
      <g className='x axis' transform={`translate(0, ${height})`}></g>
    );
  }
};