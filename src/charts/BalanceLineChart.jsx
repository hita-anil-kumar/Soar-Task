import React, { useEffect, useState ,useRef} from "react";
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

// Rounded card container
const ChartCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  width: 100%;

  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    height: 240px;
    max-width: 25rem;
  }
`;

// Chart container
const ChartWrapper = styled.div`
  width: 100%;
  height: 180px;

  @media (max-width: 768px) {
    height: 160px;
    padding: 1rem;
    max-width: 25rem;
   
  }

  canvas {
    width: 100%;
    height: auto;
  }
`;

const BalanceLineChart = () => {
  const [balance, setBalance] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetchChartData().then((data) => {
      setBalance(data.balance);
    });
  }, []);



  let gradient = null;

  if (chartRef.current) {
    const ctx = chartRef.current.getContext("2d");
    gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "rgba(45, 96, 255, 0.5)");
    gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
  }
  
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance",
        data: balance,
        fill: true,
        tension: 0.3,
        backgroundColor: gradient || "rgba(78, 115, 223, 0.05)",
        borderColor: "#1814F3",
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
        grid: {
          drawBorder: false,
          borderDash: [4, 4],
          color: "#DCE6F9",
        },
        ticks: {
          color: "#718EBF",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          drawBorder: false,
          borderDash: [4, 4],
          color: "#DCE6F9",
        },
        min: 0,
          max: 800,
        ticks: {
          color: "#718EBF",
          font: { size: 12 },
          stepSize: 200,
          
        },
      },
    },
  };

  return (
    <ChartCard>
      <ChartWrapper>
      <canvas ref={chartRef} style={{ display: "none" }} />
        <Line data={data} options={options} />
      </ChartWrapper>
    </ChartCard>
  );
};

export default BalanceLineChart;
