import React, { Component } from 'react';
import { Chart } from './Chart';
import { LoadingIndicator } from './components/LoadingIndicator';
import { PaginationButtons } from './components/PaginationButtons';
import { connect } from 'react-redux';
import * as actions from './actions/Actions';
import { max } from 'd3-array';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      chartLimit: 10,
      data: null
    };
    this.handleSetChartLimit = this.handleSetChartLimit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData() {
    const { fetchData } = this.props;
    const { chartLimit } = this.state;
    
    this.setState({isLoading: true});

    fetchData(chartLimit).then(res => {
      this.setState({isLoading: false, data: res.args});
    });
  }

  handleSetChartLimit(e) {
    e.preventDefault();
  }

  handleChange(val) {
    this.setState(
      {chartLimit: val},
      () => this.reloadData()
    );
  }

  render() {
    const { isLoading, data } = this.state;
    // Set max year in card header
    const getMaxYear = () => {
      if (data) {
        return max(data, (d) => new Date(d.date_time_peak_brightness_ut)).getFullYear();
      }
      return '';
    }

    return (
      <div>
        <div className='container'>
          <h1 className='card-header'>Fireball &amp; Bolide Reports (2009 - {getMaxYear()})</h1>
          {isLoading ? ( <LoadingIndicator /> ) : ( <Chart data={data} /> )}
          <PaginationButtons clickHandler={this.handleChange} />
        </div>
        <p className='footer-text'><a href='https://www.github.com/mcastre' target='_blank' className='app-link' rel='noopener noreferrer'>Martín Castre</a> &copy; {new Date().getFullYear()}</p>
      </div>
    );
  }
}

export default connect(
  (state) => state,
  actions // allows access of Actions via this.props
)(App);
