import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, Legend} from 'chart.js/auto';

function BarChart({chartData, title}) {
  return (
    <Bar data={chartData} options={{plugins: {title:{display:true, text: title, font:{size: 30}, padding:{top: 30}}, legend: {display: false, position: 'right'}}}} />
  )
}

export default BarChart