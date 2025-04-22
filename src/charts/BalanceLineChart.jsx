// src/charts/BalanceLineChart.jsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../api/mockApi";
import styled from "styled-components";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding: 1rem 0;

  canvas {
    max-width: 100% !important;
  }
`;

const BalanceLineChart = () => {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    fetchChartData().then((data) => {
      setBalance(data.balance);
    });
  }, []);

  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: balance,
        fill: false,
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4CAF50",
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: { color: "#eee" },
        ticks: { color: "#999" },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#999" },
      },
    },
  };

  return (
    <ChartWrapper>
      <Line data={data} options={options} height={300} />
    </ChartWrapper>
  );
};

export default BalanceLineChart;
