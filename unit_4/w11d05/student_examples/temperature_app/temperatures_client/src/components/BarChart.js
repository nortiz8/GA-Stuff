import React, { Component } from 'react';
import Chart from 'chart.js';
import axios from 'axios';

class BarChart extends Component {
  componentDidMount() {
    this.getData();
  }

  async getData() {
    const response = await axios.get('/locations/1');
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
          label: 'Average High Temperature',
          data: []
        },
        {
          label: 'Average Low Temperature',
          data: []
        }
      ]
    };
    data.temperatures.forEach(temperature => {
      chartData.labels.push(temperature.month);
      chartData.datasets[0].data.push(temperature.average_high_f);
      chartData.datasets[1].data.push(temperature.average_low_f);
    });
    console.log(chartData);
    return chartData;
  }
  createChart(data) {
    const ctx = document.querySelector('#temperatures');
    new Chart(ctx, {
      type: 'line',
      data: data
    });
  }
  render() {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id='temperatures' width='300' height='100'></canvas>
      </>
    );
  }
}

export default BarChart;
