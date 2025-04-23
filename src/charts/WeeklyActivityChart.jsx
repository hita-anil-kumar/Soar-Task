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
  const [, setWeekly] = useState({ deposit: [], withdraw: [] });

  useEffect(() => {
    fetchChartData().then((data) => {
      setWeekly(data.weekly);
    });
  }, []);

const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [200, 150, 180, 100, 250, 220, 180],
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        barThickness: "flex", 
        categoryPercentage: 0.6, // controls spacing between groups
        barPercentage: 0.5, // makes individual bars thinner
      },
      {
        label: "Deposit",
        data: [300, 250, 320, 200, 300, 260, 280],
        backgroundColor: "#3f75fe",
        borderRadius: 10,
        barThickness: "flex",
        categoryPercentage: 0.6,
        barPercentage: 0.5,
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
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#eee",
        borderWidth: 1,
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
        min: 0,
        max: 500,
        grid: {
          color: "#f1f1f1",
          borderDash: [4, 4],
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
    <ChartWrapper style={{ height: 300 }}>
      <LegendRow>
        <span className="deposit">Deposit</span>
        <span className="withdraw">Withdraw</span>
      </LegendRow>
        <Bar data={data} options={options} />
    </ChartWrapper>
  );
};

export default WeeklyActivityChart;

