import React, { Component } from 'react';
import { ResponsiveWrapper } from './ResponsiveWrapper';
import { connect } from 'react-redux';
import { setChartLimit } from './actions/Actions';
import { getData } from './api/DataApi';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null,
      chartLimit: 10
    };
    this.handleSetChartLimit = this.handleSetChartLimit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // Get data from API
    getData('ALL').then(data => {
      console.log('data from api > ', data);
      this.setState({apiData: data});
    });
  }

  handleSetChartLimit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({chartLimit: e.target.value});
  }

  render() {
    const { apiData, chartLimit } = this.state;
    if (!apiData) {
      return <p>Loading...</p>
    }
    return (
      <div className='container'>
        <h1 className='card-header'>Fireball &amp; Bolide Reports (2009 - 2015)</h1>
        <ResponsiveWrapper data={apiData} />
        <form onSubmit={this.handleSetChartLimit}>
          <label>
            <select value={chartLimit} onChange={this.handleChange}>
              <option disabled>Choose one</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default connect()(App);
