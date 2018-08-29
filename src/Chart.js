import React, { PureComponent } from 'react';
import { LineChart } from './components/LineChart'

export class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      containerWidth: null
    };

    this.fitParentContainer = this.fitParentContainer.bind(this);
  }

  componentDidMount() {
    this.fitParentContainer();
    window.addEventListener('resize', this.fitParentContainer)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitParentContainer)
  }

  fitParentContainer() {
    const { containerWidth } = this.state;
    const currentWidth = this.chartContainer.getBoundingClientRect().width;

    const shouldResize = containerWidth !== currentWidth;

    if (shouldResize) {
      this.setState({containerWidth: currentWidth});
    }
  }

  renderChartComponent() {
    const { containerWidth } = this.state;

    return (
      <LineChart {...this.props} parentWidth={containerWidth}></LineChart>
    );
  }

  render() {
    const { containerWidth } = this.state;

    return (
      <div
        ref={(el) => { this.chartContainer = el }}
        className='responsive-wrapper'>
        {(containerWidth !== null) && this.renderChartComponent()}
      </div>
    );
  }
}