import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import styled from "styled-components";
import { fetchChartData } from "../api/mockApi";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

//  Styled Wrapper with rounded white box
const ChartCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    height: 240px;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 180px;

  @media (max-width: 768px) {
    height: 160px;
  }

  canvas {
    width: 100% !important;
    height: auto !important;
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
        fill: true,
        tension: 0.5,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "#4E73DF",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#1e1e1e",
        bodyColor: "#555",
        borderColor: "#eee",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#718EBF",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          color: "#e3e6ec",
          lineWidth: 0.5,
        },
        ticks: {
          color: "#718EBF",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <ChartCard>
      <ChartWrapper>
        <Line data={data} options={options} />
      </ChartWrapper>
    </ChartCard>
  );
};

export default BalanceLineChart;
