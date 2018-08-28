import React, { PureComponent } from 'react';

export class PointToolTipText extends PureComponent {
  render() {
    const { width, height, visibility, data } = this.props;

    return (
      <text
        is='true'
        transform={'translate(' + ( width / 2 ) + ',' + ( height / 2 - 5 ) + ')'}
        visibility={visibility}>
        <tspan
          is='true'
          x='0'
          style={{fontSize: 12, textAnchor: 'middle'}}
          fill='#fff'>{data.key}
        </tspan>
        <tspan
          is='true'
          x='0'
          dy='20'
          style={{fontSize: 12, textAnchor: 'middle'}}
          fill='#a9f3ff'>{data.value + ' kt'}
        </tspan>
      </text>
    );
  }
}