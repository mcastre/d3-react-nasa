import React, { Component } from 'react';
import { select as d3Select } from 'd3-selection';

export class Grid extends Component {
  componentDidMount() {
    this.renderGrid();
  }

  componentDidUpdate() {
    this.renderGrid();
  }

  renderGrid() {
    const { grid } = this.props;
    d3Select(this.gridEl).call(grid);
  }

  render() {
    return (
      <g 
        className='y-grid'
        ref={(el) => this.gridEl = el} />
    );
  }
} 