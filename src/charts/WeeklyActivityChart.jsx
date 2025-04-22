// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Chart.register(BarElement, CategoryScale, LinearScale);

// const WeeklyActivityChart = () => {
//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         label: 'Deposits',
//         backgroundColor: '#2ecc71',
//         data: [120, 150, 180, 200, 170, 100, 90],
//       },
//       {
//         label: 'Withdrawals',
//         backgroundColor: '#e74c3c',
//         data: [80, 70, 100, 120, 130, 60, 50],
//       },
//     ],
//   };

//   return <Bar data={data} />;
// };

// export default WeeklyActivityChart;

import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../api/mockApi";
import styled from "styled-components";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ChartWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ChartTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #343c6a;
  margin-bottom: 1rem;
`;

const LegendRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
justify-content: right;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #718ebf;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }

  .deposit::before {
    background: #3f75fe;
  }

  .withdraw::before {
    background: #1e1e1e;
  }
`;

const WeeklyActivityChart = () => {
  const [weekly, setWeekly] = useState({ deposit: [], withdraw: [] });

  useEffect(() => {
    fetchChartData().then((data) => {
      setWeekly(data.weekly);
    });
  }, []);

  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: weekly.deposit,
        backgroundColor: "#3f75fe",
        borderRadius: 10,
        barThickness: 12,
        borderSkipped: false,
      },
      {
        label: "Withdraw",
        data: weekly.withdraw,
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        barThickness: 12,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        cornerRadius: 8,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#eee",
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 0,
        right: 0,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#718ebf",
          font: { size: 12, family: "'Inter', sans-serif" },
        },
      },
      y: {
        grid: {
          color: "#f1f1f1",
        },
        ticks: {
          stepSize: 100,
          color: "#718ebf",
          font: { size: 12, family: "'Inter', sans-serif" },
        },
      },
    },
  };

  return (
    <ChartWrapper>
      <ChartTitle>Weekly Activity</ChartTitle>
      <LegendRow>
        <span className="deposit">Deposit</span>
        <span className="withdraw">Withdraw</span>
      </LegendRow>
      <div style={{ height: 300 }}>
        <Bar data={data} options={options} />
      </div>
    </ChartWrapper>
  );
};

export default WeeklyActivityChart;
