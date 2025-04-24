import React, { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";
import styled from "styled-components";
import { fetchChartData } from "../api/mockApi";

ChartJS.register(ArcElement, Tooltip);

const ChartCard = styled.div`
  background: #fff;
  border-radius: 28px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  width: 100%;
  @media (max-width: 816px) {
    padding: 1rem;
    max-width: 25rem;
  }
`;

const ChartWrapper = styled.div`
  position: relative;
  height: 280px;

  canvas {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ExpensePieChart = () => {
  const chartRef = useRef();
  const [expenseLabels, setExpenseLabels] = useState([]);
  const [expenseValues, setExpenseValues] = useState([]);

  useEffect(() => {
    fetchChartData().then((data) => {
      setExpenseLabels(data.expense.labels);
      setExpenseValues(data.expense.data);
    });
  }, []);

  const backgroundColors = ["#2C2F5A", "#F38D3E", "#3E68FF", "#1C1C1C"];
  const offsets = [0, 30, 0, 20];

  const data = {
    labels: expenseLabels,
    datasets: [
      {
        data: expenseValues,
        backgroundColor: backgroundColors,
        borderColor: "#fff",
        borderWidth: 6,
        offset: offsets,
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: -0.5 * Math.PI,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
    },
  };

  const centerTextPlugin = {
    id: "centerTextPlugin",
    afterDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      const dataset = chart.data.datasets[0];
      const labels = chart.data.labels;

      if (!meta || !meta.data || !meta.data.length) return;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      meta.data.forEach((arc, i) => {
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const radius = arc.outerRadius || 100;
        const x = arc.x + Math.cos(angle) * (radius / 1.5);
        const y = arc.y + Math.sin(angle) * (radius / 1.5);

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillText(`${dataset.data[i]}%`, x, y - 8);

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
    <ChartCard role="region" aria-labelledby="expense-chart-title">
      <h3 id="expense-chart-title" style={{ fontSize: "1rem", marginBottom: "1rem", color: "#343c6a" }}>
        Expense Breakdown
      </h3>
      <ChartWrapper>
        <Pie
          ref={chartRef}
          data={data}
          options={options}
          aria-hidden="true" // hide canvas from screen readers
        />
      </ChartWrapper>
    </ChartCard>
  );
};

export default ExpensePieChart;
