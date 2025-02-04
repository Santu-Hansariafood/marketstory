import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["JFM'25", "AMJ'25", "JAS'25", "OND'25", "JFM'26"],
  datasets: [
    {
      label: "High",
      data: [2640, 2540, 2890, 2800, 2760],
      borderColor: "#22c55e",
      backgroundColor: "#a7f3d0",
    },
    {
      label: "Low",
      data: [2400, 2320, 2390, 2580, 2490],
      borderColor: "#facc15",
      backgroundColor: "#fef9c3",
    },
    {
      label: "Average",
      data: [2510, 2420, 2620, 2680, 2590],
      borderColor: "#16a34a",
      backgroundColor: "#bbf7d0",
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Maize Nizamabad - Long Term Forecast",
    },
  },
};

const CornNizamabadForecast = () => {
  return (
    <div className="p-6 bg-green-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
        Maize Nizamabad - Long Term Forecast
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Line options={chartOptions} data={chartData} />
        </div>
        <div className="flex-1 overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-green-800">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-green-800 px-4 py-2">Quarter</th>
                <th className="border border-green-800 px-4 py-2">High</th>
                <th className="border border-green-800 px-4 py-2">Low</th>
                <th className="border border-green-800 px-4 py-2">Average</th>
              </tr>
            </thead>
            <tbody>
              {[
                { quarter: "JFM'25", high: 2640, low: 2400, avg: 2510 },
                { quarter: "AMJ'25", high: 2540, low: 2320, avg: 2420 },
                { quarter: "JAS'25", high: 2890, low: 2390, avg: 2620 },
                { quarter: "OND'25", high: 2800, low: 2580, avg: 2680 },
                { quarter: "JFM'26", high: 2760, low: 2490, avg: 2590 },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-green-100" : "bg-green-50"
                  }
                >
                  <td className="border border-green-800 px-4 py-2">
                    {row.quarter}
                  </td>
                  <td className="border border-green-800 px-4 py-2">
                    {row.high}
                  </td>
                  <td className="border border-green-800 px-4 py-2">
                    {row.low}
                  </td>
                  <td className="border border-green-800 px-4 py-2">
                    {row.avg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 text-sm text-green-900 space-y-2">
        <p>
          • Nizamabad Maize Prices are expected to trade towards 2600 INR per
          Qtl levels by Mid-Feb or Early March 2025 and retrace towards INR
          2320-2350 in AMJ'25 per Qtl before bouncing back towards INR
          2850-2900 per Qtl in JAS 2025 Quarter.
        </p>
      </div>
    </div>
  );
};

export default CornNizamabadForecast;
