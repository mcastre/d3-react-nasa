import React, { Component } from 'react';
import * as d3Axis from 'd3-axis';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { select as d3Select } from 'd3-selection';

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
      .domain(extent(data.map(d => d.calculated_total_impact_energy_kt)));

    const yAxis = d3Axis.axisLeft(y);

    d3Select('.y').call(yAxis);
  }

  render() {
    return(
      <g className="y axis"></g>
    );
  }
};