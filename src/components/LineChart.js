import React, { Component } from 'react';
import { AxisX } from './AxisX';
import { AxisY } from './AxisY';
import { Line } from './Line';

export class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 760,
      height: 400,
      margin: {
        top: 20, 
        right: 20, 
        bottom: 30, 
        left: 50
      }
    };
  }

  render() {
    const { width, height, margin } = this.state;
    const { data } = this.props;

    return(
      <svg height={height} width={width} >
        <g transform="translate(50,20)">
          <AxisX width={width} height={height} margin={margin} data={data}/>
          <AxisY width={width} height={height} margin={margin} data={data}/>
          <Line width={width} height={height} margin={margin} data={data}/>
        </g>
      </svg>
    )
  }
};