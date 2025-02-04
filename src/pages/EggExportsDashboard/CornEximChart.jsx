import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const exportData = {
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
      label: "2023-24",
      data: [36, 35, 59, 40, 25, 31, 40, 38, 49, 47, 23, 20],
      backgroundColor: "#6b46c1",
    },
    {
      label: "2024-25",
      data: [22, 26],
      backgroundColor: "#2d6a4f",
    },
  ],
};

const importData = {
  labels: [
    "Feb-24",
    "Mar-24",
    "Apr-24",
    "May-24",
    "Jun-24",
    "Jul-24",
    "Aug-24",
    "Sep-24",
    "Oct-24",
  ],
  datasets: [
    {
      label: "Imports in KMT",
      data: [72, 55, 51, 131, 218, 159, 86, 69, 0.05],
      backgroundColor: "#6b46c1",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const CornEximChart = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
        Maize EXIM Update
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Export Chart */}
        <div>
          <h2 className="text-lg font-semibold text-center mb-4">
            India Maize Exports (KMT)
          </h2>
          <Bar data={exportData} options={options} />
        </div>
        {/* Import Chart */}
        <div>
          <h2 className="text-lg font-semibold text-center mb-4">
            Indian Maize Imports in KMT
          </h2>
          <Bar data={importData} options={options} />
        </div>
      </div>
      <div className="mt-6 text-sm text-gray-700 space-y-2">
        <p>
          • India’s Maize exports are projected to decline in FY 2024-25, with
          lower volumes in key months like October and December.
        </p>
        <p>
          • Maize imports surged in May-June 2024, peaking at 218 KMT,
          highlighting reliance on imports during supply gaps.
        </p>
        <p>
          • Imports likely to stay higher in the consecutive year of 2024-25, in
          order to compensate the shortfall likely to arise from higher uptake
          in ethanol.
        </p>
      </div>
    </div>
  );
};

export default CornEximChart;
