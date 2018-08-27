import React from 'react';
import Axis from './Axis';

export default ({ scales, margin, width, height }) => {
  const xProps = {
    orient: 'bottom',
    scale: scales.xScale,
    translate: `translate(0, ${height - margin.bottom})`,
    ticks: height - margin.top - margin.bottom
  };

  const yProps = {
    orient: 'left',
    scale: scales.yScale,
    translate: `translate(${margin.left}, 0)`,
    ticks: width - margin.left - margin.right
  };

  console.log('xProps', xProps)
  console.log('yProps', yProps)
  
  return (
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <Axis {...xProps} />
      <Axis {...yProps} />
    </g>
  )
};