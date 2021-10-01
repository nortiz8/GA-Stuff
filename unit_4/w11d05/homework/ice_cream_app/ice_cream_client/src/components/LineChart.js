import React, { Component } from 'react';
import Chart from 'chart.js';
import axios from 'axios';

class LineChart extends Component {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await axios.get('/ice_creams/1');
    const data = response.data;
    this.setState({
      locations: data
    });
    this.createChart(this.prepareData(data));
  }
  prepareData(data) {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'Pints Sold',
          data: []
        },
        {
          label: 'Pints Made',
          data: []
        }
      ]
    };
    data.pints.forEach(pint => {
      chartData.labels.push(pint.month);
      chartData.datasets[0].data.push(pint.pints_sold);
      chartData.datasets[1].data.push(pint.pints_made);
    });
    console.log(chartData);
    return chartData;
  }
  createChart(data) {
    const ctx = document.querySelector('#pints');
    new Chart(ctx, {
      type: 'line',
      data: data
    });
  }
  render() {
    return (
      <>
        <h1>Pints</h1>
        <canvas id='pints' width='300' height='100'></canvas>
      </>
    );
  }
}

export default LineChart;
