import React, { Component } from 'react';
import { PointToolTipText } from './PointTooltipText';

export class PointToolTip extends Component {
  render() {
    const { display, pos, data} = this.props.tooltip;
    let visibility = 'hidden';
    let transform = '';
    let x = 0;
    let y = 0;
    let width = 150, 
          height = 70;
    let transformText = 'translate(' + 13 + ',' + ( height / 2 - 5 ) + ')';

    let transformArrow = '';

    if (display) {
      const position = pos;
      x = position.x;
      y = position.y;
      visibility = 'visible';

      if (y > height) { // Position tooltip above the Point if theres space up top
        transform = 'translate(' + ( x - width / 2 ) + ',' + ( y - height - 20) + ')';
        transformArrow = 'translate(' + ( width / 2 - 20 ) + ',' + ( height - 2 ) + ')';
      } else if (y < height) { // Position tooltip below the Point if no space available above
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
          fill='#000'
          opacity={0.75} />
        <polygon
          is='true'
          className='shadow'
          points='10,0 30,0 20,10'
          transform={transformArrow}
          fill='#000'
          opacity={0.75}
          visibility={visibility} />
        <PointToolTipText
          width={width}
          height={height}
          transformText={transformText}
          visibility={visibility}
          data={data} />
      </g>
    );
  }
};