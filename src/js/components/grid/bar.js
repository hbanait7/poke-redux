import React, { Component } from 'react';

var Chart = require("react-chartjs").Bar; // Have to use var here for some reason
var BChart = require('chart.js');

class Bar extends Component {

  constructor(props) {
    super(props)
  };

  
  render() {

    const pokeLabels = ["Hit Points", "Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
    
    const data = {
      labels: pokeLabels,
      datasets: [
        {
          fillColor: ['rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                      ],      
          data: this.props.stats
        }
      ]
    };

    return (
      <Chart data={data} width='930px' height='500px' options={{responsive: true, maintainAspectRatio: false }} redraw />
    );
  }   
}

export default Bar;