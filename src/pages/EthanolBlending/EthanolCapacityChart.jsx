import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["North", "South", "East", "West", "Central", "North East"],
  datasets: [
    {
      label: "Grain + Dual Capacity",
      data: [2.89, 1.27, 1.72, 1.03, 1.21, 0.21],
      backgroundColor: "#3b8c36",
    },
    {
      label: "Maize Allocation",
      data: [1.82, 0.83, 1.2, 0.22, 0.61, 0.16],
      backgroundColor: "#ffd700",
    },
    {
      label: "DFG",
      data: [0.43, 0.11, 0.2, 0.11, 0.22, 0.05],
      backgroundColor: "#99e699",
    },
  ],
};

const surplusData = {
  labels: ["North", "South", "East", "West", "Central", "North East"],
  datasets: [
    {
      label: "Surplus",
      data: [0.64, 0.33, 0.32, 0.7, 0.38, 0],
      backgroundColor: "#3b8c36",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Grain Distillery Capacity by Region",
    },
  },
};

const EthanolCapacityChart = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-green-100 to-yellow-100 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">
        Expansion in Grain-Based Ethanol Capacity to Help Ethanol Blending
        Program in India
      </h1>
      <div className="mb-6">
        <Bar options={options} data={data} />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">
          Grain Distillery Capacity (Surplus/Deficit)
        </h2>
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Grain Distillery Surplus by Region",
              },
            },
          }}
          data={surplusData}
        />
      </div>

      <div className="text-green-900">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The West and North regions lead with surplus distillery capacities
            of 0.70 billion liters and 0.64 billion liters, along with
            utilization rates of 87% and 63%, ensuring robust support for
            ethanol production.
          </li>
          <li>
            The South and East regions, with utilization rates of 65% and 70%,
            show strong potential for further production targets to run at
            optimum capacity.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EthanolCapacityChart;
