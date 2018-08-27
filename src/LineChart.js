import React, { Component } from 'react';
import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { uniq } from 'lodash';
import Axes from './Axes';

class LineChart extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      width: 960,
      height: 500,
      margin: { 
        top: 20, 
        right: 20, 
        bottom: 30, 
        left: 40 
      }
    }
  }

  render() {
    const { data } = this.props;
    const { width, height, margin } = this.state;
    const yearDate = data.map(d => new Date(d.date).getFullYear());
    const filteredYears = uniq(yearDate).filter(Boolean); // Filters out all falsey values
    const minYear = Math.min(...filteredYears);
    const maxYear = Math.max(...filteredYears);

    const xScale = scaleLinear()
      .domain([minYear, maxYear])
      .range([margin.left, width - margin.right]);

    const yScale = scaleOrdinal()
      .domain(data.map(d => d.country))
      .range([height - margin.bottom, margin.top]);

    return (
      <svg width={width} height={height}>
        <Axes
          scales={{xScale, yScale}}
          margin={margin}
          width={width}
          height={height}>
        </Axes>
      </svg>
    )
  }
}

export default LineChart;