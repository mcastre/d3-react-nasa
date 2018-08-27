// import React, { Component } from 'react';
// import * as topojson from 'topojson';
// import * as usData from './json/us.json';
// import * as congressData from './json/us-congress-113.json';
// import * as d3 from 'd3';

// class CongressionalDistricts extends Component {
//   state = {
//     usData: null,
//     congressData: null
//   };

//   componentWillMount() {
//     let promises = [
//       usData,
//       congressData
//     ];

//     Promise.all(promises)
//       .then(values => {
//         this.setState(
//           {
//             usData: values[0],
//             congressData: values[1]
//           }
//         );
//       })
//   }

//   componentDidUpdate() {
//     const { width, height } = this.props;
//     const { usData, congressData } = this.state;
//     const svg = d3.select(this.refs.anchor);

//     const projection = d3.geoAlbers()
//       .scale(1280)
//       .translate([width / 2, height / 2]);

//     const path = d3.geoPath(projection);

//     svg.append("g")
//         .attr("class", "states")
//       .selectAll("path")
//         .data(topojson.feature(usData, usData.objects.states).features)
//       .enter().append("path")
//         .attr("d", path)

//     svg.append("path")
//         .attr("class", "state-boundaries")
//         .datum(topojson.mesh(usData, usData.objects.states, function(a, b) { return a !== b; }))
//         .attr("d", path);
//   }

//   handleStateAction(features, i) {
//     console.log('handleStateAction', features[i])
//   }

//   renderStates() {
//     const { width, height } = this.props;
//     const { usData, congressData } = this.state;
//     const svg = d3.select(this.refs.anchor);
//     const projection = d3.geoAlbers()
//       .scale(1280)
//       .translate([width / 2, height / 2]);

//     const path = d3.geoPath(projection);
//     const features = topojson.feature(usData, usData.objects.states).features;
    
//     return features.map(
//       (feature, i) =>
//         <path
//           key={i}
//           d={path(feature)}
//           onClick={() => this.handleStateAction(features, i)}
//         />
//     );
//   }

//   renderStateBounds() {
//     const { usData } = this.state;
//     const { width, height } = this.props;
//     const projection = d3.geoAlbers()
//       .scale(1280)
//       .translate([width / 2, height / 2]);
//     const features = topojson.feature(usData, usData.objects.states).features;
//     const boundaries = topojson.mesh(usData, usData.objects.states, (a, b) => a !== b);
//     const path = d3.geoPath(projection);
//     return (
//       <path
//         d={path(boundaries)}
//         className='state-boundaries' 
//       />
//     )
//   }

//   render() {
//     const { usData, congressData } = this.state;
//     if (!usData || !congressData) {
//       return null;
//     }

//     return (
//       <g className='states'>
//         {this.renderStates()}
//         {this.renderStateBounds()}
//       </g>
//       // <g ref='anchor' />
//     );
//   }
// }

// export default CongressionalDistricts;