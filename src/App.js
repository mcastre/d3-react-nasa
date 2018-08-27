import React, { Component } from 'react';
// import { geoPath } from "d3-geo"
// import { feature, mesh } from "topojson-client"
import CongressionalDistricts from './CongressionalDistricts';
import LineChart from './LineChart';
import BasicLineChart from './BasicLineChart';
import * as soda from 'soda-js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaData: null
    };
  }

  componentWillMount() {
    const consumer = new soda.Consumer('data.nasa.gov');
    consumer.query()
      .withDataset('q8u9-7uq7')
      .getRows()
        .on('success', (data) => {
          console.log('evaData', data)
          this.setState({evaData: data})})
        .on('error', (err) => console.log('error: ', err));
  }

  render() {
    const { evaData } = this.state;
    if (!evaData) {
      return <p>Loading...</p>
    }
    return (
      <div className='container'>
        <BasicLineChart evaData={evaData} />
      </div>
    );
  }
}

export default App;
