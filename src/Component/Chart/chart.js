import { Component, React } from 'react';
import ReactApexChart from 'react-apexcharts';
import ReactDOM from 'react-dom';
import { ApexOptions } from "apexcharts";

export default class ApexChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
              'United States', 'China', 'Germany'
            ],
          }
        },
      
      
      };
    }

  

    render() {
      return (
            <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

//const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(ApexChart), domContainer)

//export default function chart(){
//  const chartElement = React.createElement(ApexChart)
//  return chartElement
//}