import React, { Component } from 'react';
export class PointToolTip extends Component {
  render() {
    const { display, pos, data} = this.props.tooltip;
    console.log('data', data)
    let visibility = 'hidden';
    let transform = '';
    let x = 0;
    let y = 0;
    let width = 150, 
          height = 70;
    let transformText = 'translate(' + width / 2 + ',' + ( height / 2 - 5 ) + ')';
    let transformArrow = '';

    if (display) {
      const position = pos;
      x = position.x;
      y = position.y;
      visibility = 'visible';

      if (y > height) {
        transform = 'translate(' + ( x - width / 2) + ',' + ( y - height - 20) + ')';
        transformArrow = 'translate(' + ( width / 2 - 20 ) + ',' + ( height - 2 ) + ')';
      } else if (y < height) {
        transform = 'translate(' + ( x - width / 2 ) + ',' + ( Math.round(y) + 20 ) + ')';
        transformArrow = 'translate(' + ( width / 2 - 20) + ',' + 0 + ') rotate(180,20,0)';
      }

    } else {
      visibility = 'hidden';
    }

    return (
      <g transform={transform}>
        <rect
          is='true'
          className='shadow'
          width={width}
          height={height} 
          rx={5} 
          ry={5} 
          visibility={visibility} 
          fill='#000' />
        <polygon
          is='true'
          className='shadow'
          points='10,0 30,0 20,10'
          transform={transformArrow}
          fill='#000'
          visibility={visibility} />
        <text
          is='true'
          transform={transformText}
          visibility={visibility}>
          <tspan
            is='true'
            x='0'
            textAnchor='middle'
            fontSize={15}
            fill='#fff'>{data.key}
          </tspan>
          <tspan
            is='true'
            x='0'
            textAnchor='middle'
            dy='25'
            fontSize={20}
            fill='#a9f3ff'>{data.value}
          </tspan>
        </text>
      </g>
    );
  }
};