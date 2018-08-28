import React, { Component } from 'react';
import { ResponsiveWrapper } from './ResponsiveWrapper';
import { connect } from 'react-redux';
// import { getEvaData } from './actions/Actions';
import { getData } from './api/DataApi';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: null
    };
  }

  componentWillMount() {
    // Get data from API
    getData('ALL').then(data => {
      console.log('data from api > ', data);
      this.setState({apiData: data});
    });
  }

  render() {
    const { apiData } = this.state;
    if (!apiData) {
      return <p>Loading...</p>
    }
    return (
      <div className='container'>
        <h1 className='card-header'>Fireball &amp; Bolide Reports (2009 - 2015)</h1>
        <ResponsiveWrapper data={apiData} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(App);
