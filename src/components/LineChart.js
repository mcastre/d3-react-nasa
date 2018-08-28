import React, { PureComponent } from 'react';
import { AxisX } from './AxisX';
import { AxisY } from './AxisY';
import { Line } from './Line';
import { Grid } from './Grid';
import { scaleLinear } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import { max } from 'd3-array';

export class LineChart extends PureComponent {
  render() {
    const { data, parentWidth } = this.props;

    const svgSize = {
      width: Math.max(parentWidth, 300),
      height: 400
    };

    const svgMargins = {
      top: 20, 
      right: 20, 
      bottom: 30, 
      left: 50
    };

    const { width, height } = svgSize;
    const chartWidth = width - svgMargins.left - svgMargins.right;
    const chartHeight = height - svgMargins.bottom - svgMargins.top;

    // Setting domain for Y Grid
    const yDomain = [0, max(data, (d) => d.calculated_total_impact_energy_kt)];
    const y = scaleLinear().domain(yDomain).range([chartHeight, 0]);

    const yGrid = axisLeft(y)
      .ticks(5)
      .tickSize(-chartWidth, 0, 0)
      .tickFormat('');

    return(
      <svg height={height} width={width} >
        <g transform={`translate(${svgMargins.bottom}, ${svgMargins.top})`}>
          <Grid width={width} height={chartHeight} grid={yGrid} gridAxis='y' />
          <AxisX width={width} height={height} margin={svgMargins} data={data}/>
          <AxisY width={width} height={height} margin={svgMargins} data={data}/>
          <Line width={width} height={height} margin={svgMargins} data={data}/>
        </g>
      </svg>
    )
  }
};