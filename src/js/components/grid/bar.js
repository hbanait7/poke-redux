import React, { Component } from 'react';

var Chart = require("react-chartjs").Bar; // Have to use var here for some reason
var BChart = require('chart.js');

class Bar extends Component {

  constructor(props) {
    super(props)
  };

  
  render() {

    const pokeDataSet = [111, 23, 36, 48, 59, 61];

    const pokeLabels = ['afadsf', 'fasdfa', 'afadsfdsa', 'fasdfads', 'fasdad', 'asdfads'];
    
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
          data: pokeDataSet
        }
      ]
    };

    return (
      <div>
        <Chart data={data} redraw />
      </div>
    );
  }   
}

export default Bar;