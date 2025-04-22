import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCard = styled.div`
  background: #fff;
  border-radius: 28px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

const ChartWrapper = styled.div`
  position: relative;
  height: 360px;

  canvas {
    max-width: 100% !important;
    max-height: 100% !important;
  }
`;

const ExpensePieChart = () => {
  const chartRef = useRef();

  const labels = ["Entertainment", "Bill Expense", "Investment", "Others"];
  const values = [30, 15, 20, 35];
  const backgroundColors = ["#2C2F5A", "#F38D3E", "#3E68FF", "#1C1C1C"];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderColor: "#fff",
        borderWidth: 6,
        offset: [0, 0, 0, 0], // Pull out specific slices
        segment: {
            // Dynamically return radius per slice
            radius: (ctx) => {
              const radii = [100, 120, 80, 110]; // custom radii for each slice
              return radii[ctx.index];
            }
          }
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      duration: 1000,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  const centerTextPlugin = {
    id: "centerTextPlugin",
    afterDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      if (!meta || !meta.data || meta.data.length === 0) return;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      meta.data.forEach((arc, i) => {
        const model = arc;
        const angle = (model.startAngle + model.endAngle) / 2;
        const radius = arc.outerRadius || 100;
        const x = arc.x + Math.cos(angle) * (radius / 1.5);
        const y = arc.y + Math.sin(angle) * (radius / 1.5);

        // Percentage label
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText(`${values[i]}%`, x, y - 8);

        // Category name
        ctx.fillStyle = "#dddddd";
        ctx.font = "11px Inter, sans-serif";
        ctx.fillText(labels[i], x, y + 10);
      });

      ctx.restore();
    },
  };

  useEffect(() => {
    if (!ChartJS.registry.plugins.get("centerTextPlugin")) {
      ChartJS.register(centerTextPlugin);
    }
  }, []);

  return (
    <ChartCard>
      <ChartWrapper>
        <Pie ref={chartRef} data={data} options={options} />
      </ChartWrapper>
    </ChartCard>
  );
};

export default ExpensePieChart;
