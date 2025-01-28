import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Page8 = () => {
  const sowingData = {
    labels: ["Bihar", "AP", "Telangana", "Karnataka", "Maharashtra"],
    datasets: [
      {
        label: "2023",
        data: [0.66, 0.07, 0.26, 0.09, 0.26],
        backgroundColor: "#4c6ef5",
      },
      {
        label: "2024",
        data: [0.69, 0.10, 0.51, 0.13, 0.41],
        backgroundColor: "#22c55e",
      },
      {
        label: "% Change",
        type: "line",
        data: [4.0, 43.3, 97.7, 38.3, 59.4],
        borderColor: "#f59e0b",
        backgroundColor: "#f59e0b",
      },
    ],
  };

  const acreageData = {
    labels: [
      "2021-22",
      "2022-23",
      "2023-24",
      "2024-25 Dec",
      "2024-25 Jan",
    ],
    datasets: [
      {
        label: "Acreage (Million Ha)",
        data: [2.17, 2.26, 2.31, 2.50, 2.61],
        backgroundColor: "#3b82f6",
      },
      {
        label: "Avg Price (INR/Qtl)",
        type: "line",
        data: [1699, 2266, 2167, 2445, 2445],
        borderColor: "#f43f5e",
        backgroundColor: "#f43f5e",
      },
      {
        label: "% YoY Change",
        type: "line",
        data: [1.7, 4.2, 8.9, 33.6, 8.3],
        borderColor: "#10b981",
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Indian Rabi Corn Insights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Indian Rabi Corn Sowing Progress
          </h2>
          <Bar
            data={sowingData}
            options={{
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Corn sowing for 2024-25 increased significantly, with some areas nearly doubling acreage.</li>
            <li>The growth trend shows both marginal and substantial improvements across regions.</li>
            <li>Bihar saw a slower planting pace this year due to delays in the Kharif harvest.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Corn Acreage Expectation for Rabi 2024-25
          </h2>
          <Bar
            data={acreageData}
            options={{
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li>Acreage for 2024-25 is estimated to rise from 2.31 million Ha (Dec 2024) to 2.61 million Ha (Jan 2025).</li>
            <li>Growth is driven by a 157% increase in seed sales, indicating strong farmer intentions.</li>
            <li>Favorable agronomic conditions further support higher sowing activity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page8;
