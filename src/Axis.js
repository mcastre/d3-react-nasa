import React, { Component } from 'react';
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

class Axis extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { orient, scale, ticks } = this.props;
    let axis;
    if (orient === 'left') {
      axis = d3Axis.axisLeft(scale)
        .tickSize(ticks)
        .ticks([2])
    } else if (orient === 'bottom') {
      axis = d3Axis.axisBottom(scale)
        .tickSize(ticks)
        .ticks([5])
    }

    d3Select(this.axisElement).call(axis);
  }

  render() {
    const { orient, translate } = this.props;
    return (
      <g
        className={`axis axis-${orient}`}
        ref={(el) => { this.axisElement = el; }}
        transform={translate}>
      </g>
    );
  }
}

export default Axis;