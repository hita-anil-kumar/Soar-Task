import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

const ExpensePieChart = () => {
  const data = {
    labels: ['Entertainment', 'Bills', 'Investments', 'Others'],
    datasets: [
      {
        data: [300, 200, 100, 50],
        backgroundColor: ['#3498db', '#9b59b6', '#f1c40f', '#95a5a6'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpensePieChart;
