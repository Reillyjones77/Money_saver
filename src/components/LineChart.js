import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, Legend} from 'chart.js/auto';


function LineChart({chartData, title}) {
  return (
    <Line data={chartData} options={{maintainAspectRatio: false, scales:{ y:{ beginAtZero: true , title:{ display: true, text: 'USD', font:{size: 18} } } }, plugins: {title:{display:true, text: title, font:{size: 30}, padding:{top: 10}}, legend: {display: false}}}} />
  )
}

export default LineChart