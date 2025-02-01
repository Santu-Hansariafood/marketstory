import { Bar, Line } from "react-chartjs-2";
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

const Page10 = () => {
  const barData = {
    labels: [
      "Andhra Pradesh",
      "Bihar",
      "Karnataka",
      "Maharashtra",
      "Tamil Nadu",
      "Telangana",
      "West Bengal",
    ],
    datasets: [
      {
        label: "2023 Rainfall (mm)",
        backgroundColor: "#facc15",
        borderColor: "#facc15",
        data: [446, 760, 460, 715, 354, 847, 909],
      },
      {
        label: "2024 Rainfall (mm)",
        backgroundColor: "#16a34a",
        borderColor: "#16a34a",
        data: [642, 798, 613, 969, 389, 948, 1169],
      },
    ],
  };

  const lineData = {
    labels: [
      "Andhra Pradesh",
      "Bihar",
      "Karnataka",
      "Maharashtra",
      "Tamil Nadu",
      "Telangana",
      "West Bengal",
      "All India",
    ],
    datasets: [
      {
        label: "Rainfall Departure (%)",
        data: [27, -20, 6, 25, 18, 29, 0, 8],
        borderColor: "#f97316",
        backgroundColor: "#f97316",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Summer Rainfall Performance - 2024 vs 2023
          </h2>
          <div className="h-80">
            <Bar
              data={barData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Rainfall Departure (%)
          </h2>
          <div className="h-80">
            <Line
              data={lineData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-green-700">Key Insights</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Bihar Maize acreage is 35% of total Maize cultivated area.</li>
          <li>
            Summer rainfall in Bihar is higher than last year, but still 20%
            below normal.
          </li>
          <li>
            Low rainfall affects soil moisture in key Maize-growing areas.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page10;
