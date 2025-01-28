import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Page5 = () => {
  // Graph Data
  const data = {
    labels: ["Wheat", "Gram", "Mustard", "Corn", "Paddy", "Barley"],
    datasets: [
      {
        label: "2023 (Million Ha)",
        data: [31.3, 9.32, 9.37, 1.75, 1.36, 0.7],
        backgroundColor: "#4f46e5",
        borderWidth: 1,
      },
      {
        label: "2024 (Million Ha)",
        data: [31.97, 9.4, 8.85, 1.89, 1.44, 0.66],
        backgroundColor: "#a855f7",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Wheat", "Gram", "Mustard", "Corn", "Paddy", "Barley"],
    datasets: [
      {
        label: "% Change",
        type: "line",
        data: [2.15, 0.87, -5.58, 7.99, 5.58, -5.56],
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        borderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col gap-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Rabi Acreage Trends Align with Nov'24 Report Projections
        </h1>
        <p className="text-gray-600 mt-2">
          Key insights into Rabi sowing progress and acreage comparisons for
          2023-24.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Bar Graph */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Key Crops Rabi Sowing Progress as of 30th Dec
          </h2>
          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>

        {/* Line Graph */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            % Change in Acreage
          </h2>
          <Line data={lineData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Page5;
