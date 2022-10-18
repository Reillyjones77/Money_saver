import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Chart as ChartJS, Legend} from 'chart.js/auto';

function PieChart({chartData, title}) {
  return (
    <Doughnut data={chartData} options={{plugins: {title:{display:true, text: title, font:{size: 30}, padding:{top: 30}}, legend: {display: true, position: 'right'}}}} />
  )
}

export default PieChart