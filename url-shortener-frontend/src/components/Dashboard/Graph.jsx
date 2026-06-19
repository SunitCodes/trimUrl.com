import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Graph = ({ graphData }) => {
  const sortedData = [...graphData].sort(
    (a, b) => new Date(a.clickDate) - new Date(b.clickDate)
  );

  const labels = sortedData?.map((item) => `${item.clickDate}`);

  const userPerDay = sortedData?.map((item) => item.count);
  const data = {
    labels:
      graphData.length > 0
        ? labels
        : ["Oct 01", "Oct 05", "Oct 10", "Oct 15", "Oct 20", "Today"],

    datasets: [
      {
        label: "Clicks",
        data:
          graphData.length > 0
            ? userPerDay
            : [12, 19, 28, 22, 30, 36],

        backgroundColor: "rgba(59,130,246,0.85)",
        borderRadius: 12,
        borderSkipped: false,
        hoverBackgroundColor: "rgba(96,165,250,1)",
        barThickness: 28,
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

      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
        borderColor: "rgba(255,255,255,0.1)",
        borderWidth: 1,
        padding: 12,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#94a3b8",
          font: {
            size: 13,
            weight: "500",
          },
        },

        border: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,

        grid: {
          color: "rgba(255,255,255,0.05)",
          drawBorder: false,
        },

        ticks: {
          color: "#64748b",
          font: {
            size: 12,
          },
        },

        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-full w-full bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-white text-xl font-semibold">
            Clicks over Time
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Performance summary for the last 30 days
          </p>
        </div>


      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;