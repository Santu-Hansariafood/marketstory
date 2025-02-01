import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const cornStarchData = {
  labels: [
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
    "2024-25",
  ],
  datasets: [
    {
      label: "Sep-Aug",
      data: [2.24, 1.35, 5.34, 4.94, 5.17, 6.86, 7.0],
      backgroundColor: "#3b8c36",
    },
    {
      label: "Sep-Oct",
      data: [0.63, 0.08, 0.82, 0.79, 0.6, 1.05, 0.9],
      backgroundColor: "#ffd700",
    },
  ],
};

const seasonalTrendData = {
  labels: [
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
  ],
  datasets: [
    {
      label: "Maize Starch Export Seasonality",
      data: [
        0.9, 0.98, 1.0, 0.95, 0.95, 0.99, 1.0, 1.08, 1.08, 1.09, 1.01, 0.97,
      ],
      borderColor: "#3b8c36",
      backgroundColor: "rgba(59, 140, 54, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const eggExportsData = {
  labels: [
    "2014-15",
    "2015-16",
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
  ],
  datasets: [
    {
      label: "Egg Exports (Thd Tons)",
      data: [396, 522, 371, 396, 470, 282, 207, 259, 584, 1257],
      backgroundColor: "#3b8c36",
    },
  ],
};

const eggProductionData = {
  labels: [
    "2016-17",
    "2017-18",
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
    "2023-24",
  ],
  datasets: [
    {
      label: "Production of Fowl Eggs (in Crore)",
      data: [77.92, 84.17, 91.76, 101.11, 107.89, 114.57, 122.33, 134.56],
      backgroundColor: "#ffd700",
    },
    {
      label: "% Exports of Imported Fowl Eggs over Production",
      data: [6.8, 6.6, 6.6, 7.2, 3.9, 2.7, 3.2, 14.0],
      borderColor: "#3b8c36",
      tension: 0.4,
      type: "line",
    },
  ],
};

const eggPricesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "2022",
      data: [525, 532, 440, 420, 539, 514, 509, 497, 444, 512, 546, 551],
      borderColor: "#3b8c36",
      tension: 0.4,
    },
    {
      label: "2023",
      data: [512, 530, 450, 430, 545, 520, 515, 505, 450, 520, 550, 560],
      borderColor: "#ffd700",
      tension: 0.4,
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
      text: "Indian Corn Starch Exports (Lakh Tons)",
    },
  },
};

const seasonalOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Maize Starch Export Seasonal Trends",
    },
  },
};

const CornStarchExportChart1 = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-green-100 to-yellow-100 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">
        Revised Corn Starch Export Outlook and Seasonal Trends
      </h1>

      <div className="mb-8">
        <Bar options={options} data={cornStarchData} />
      </div>

      <div className="mb-8">
        <Line options={seasonalOptions} data={seasonalTrendData} />
      </div>

      <div className="mb-8">
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Egg Exports (Thd Tons)",
              },
            },
          }}
          data={eggExportsData}
        />
      </div>

      <div className="mb-8">
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Eggs Export % over Production",
              },
            },
          }}
          data={eggProductionData}
        />
      </div>

      <div className="mb-8">
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Average Monthly Egg Prices - Namakkal",
              },
            },
          }}
          data={eggPricesData}
        />
      </div>

      <div className="text-green-900">
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Indian corn starch exports for 2024-25 are now projected at 7.00 lakh tons, revised downwards by 1 lakh ton from the earlier estimate of 8 lakh tons, reflecting a recalibration of expectations.
          </li>
          <li>
            Maize starch exports follow a seasonal trend, peaking during April to June, with monthly volumes consistently exceeding 1 lakh tons during this period.
          </li>
          <li>
            Egg exports reached a record 1,257 thousand tons in 2023-24, making up 14% of total egg production.
          </li>
          <li>
            Average egg prices in Namakkal at ₹551/100 pieces in December 2024, maintaining a steady price trend.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CornStarchExportChart1;
