import React, { PureComponent } from 'react';
import { AxisX } from './AxisX';
import { AxisY } from './AxisY';
import { Line } from './Line';

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
    }

    const { width, height } = svgSize;

    return(
      <svg height={height} width={width} >
        <g transform="translate(50,20)">
          <AxisX width={width} height={height} margin={svgMargins} data={data}/>
          <AxisY width={width} height={height} margin={svgMargins} data={data}/>
          <Line width={width} height={height} margin={svgMargins} data={data}/>
        </g>
      </svg>
    )
  }
};