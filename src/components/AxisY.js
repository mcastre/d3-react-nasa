import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select as d3Select } from 'd3-selection';

import { info } from '../helpers/InfoText';

export class AxisY extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { data, margin, height } = this.props;
    const chartHeight = height - margin.bottom - margin.top;

    const y = scaleLinear()
      .range([chartHeight, 0])
      .domain([0, max(data, (d) => d.calculated_total_impact_energy_kt)]);

    const yAxis = d3Axis.axisLeft(y);

    d3Select('.y').call(yAxis)
      .append('text') // append Y axis label
      .attr('fill', '#6a6a6a')
      .attr('transform', 'rotate(-90)')
      .attr('y', -10)
      .attr('dy', '0.073em')
      .attr('text-anchor', 'end')
      .text('(kt)')
      .append('title')
      .text(info.ctieKT);
  }

  render() {
    return(
      <g className="y axis"></g>
    );
  }
};