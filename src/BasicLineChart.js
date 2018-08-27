import React, { Component } from 'react';
import { scaleTime, scaleBand } from 'd3-scale';
import { extent } from 'd3-array';
import { line } from 'd3-shape';
import { nest } from 'd3-collection';
import { timeFormat } from 'd3-time-format';
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

export class AxisX extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { data, margin, width } = this.props;
    const chartWidth = width - margin.left - margin.right;

    const x = scaleTime()
      .range([0, chartWidth])
      .domain(extent(data.map(d => new Date(d.date))));
    
    const xAxis = d3Axis.axisBottom(x).ticks(5);

    d3Select('.x').call(xAxis);

  }

  render() {
    const { margin } = this.props;
    const height = this.props.height - margin.top - margin.bottom;

    return(
      <g className='x axis' transform={`translate(0, ${height})`}></g>
    );
  }
};

export class AxisY extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const { data, margin, height } = this.props;
    const chartHeight = height - margin.bottom - margin.top;

    const y = scaleBand()
      .range([chartHeight, 0])
      .padding(0.1)
      .domain(data.map(d => d.country));
    
    const yAxis = d3Axis.axisLeft(y);

    d3Select('.y').call(yAxis);
  }

  render() {
    return(
      <g className="y axis"></g>
    );
  }
};

function dateFilter(date) {
  if (date instanceof Date && !isNaN(date)) {
    return new Date(date);
  }
}

export class Line extends Component {
  render() {
    const { data, margin, width, height } = this.props;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.bottom - margin.top;

    const dataGroup = nest()
      .key(d => d.country)
      .entries(data);

    const xDomain = extent(
      data
        .map(d => new Date(d.date))
        .filter(fd => (fd instanceof Date && !isNaN(fd)))
    );

    const x = scaleTime().range([0, chartWidth]).domain(xDomain);
    const y = scaleBand().range([chartHeight, 0]).domain(data.map(d => d.country));

    const chartLine = line()
      .x(d => x(new Date(d.date)))
      .y(d => y(d.country));


    return(
      <g>
        {dataGroup.map((d, i) => 
          <path
            key={i}
            className='line'
            d={chartLine(d.values)}>
          </path>
        )}
      </g>
    );
  }
};

class BasicLineChart extends Component {
  state = {
    width: 960,
    height: 500,
    margin: {
      top: 20, 
      right: 20, 
      bottom: 30, 
      left: 50
    }
  };

  render() {
    var width = 960;
    var height = 500;
    var margin = this.state.margin;
    var data = this.props.evaData;
    return(
      <div>
        <div id="chart">
          <svg height={height} width={width} >
            <g transform="translate(50,20)">
              <AxisX width={width} height={height} margin={margin} data={data}/>
              <AxisY width={width} height={height} margin={margin} data={data}/>
              <Line width={width} height={height} margin={margin} data={data}/>
            </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default BasicLineChart;