import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ONDRainfallPage = () => {
  const rainfallPerformanceData = {
    labels: [
      "Bihar",
      "Andhra Pradesh",
      "Karnataka",
      "Maharashtra",
      "Tamil Nadu",
      "Telangana",
      "West Bengal",
    ],
    datasets: [
      {
        label: "2023 Rainfall (mm)",
        data: [442, 740, 778, 613, 719, 949, 847],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "2024 Rainfall (mm)",
        data: [460, 354, 389, 364, 399, 446, 909],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  const rainfallPerformanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "OND Rainfall Performance - 2024 Vs 2023",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Rainfall (mm)",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          OND Rainfall Performance - 2024 Vs 2023
        </h1>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-8">
          <ul className="list-disc list-inside text-green-800">
            <li>
              The OND rainfall in Bihar recorded a significant decline compared
              to last year, leading to soil moisture stress in key Maize-growing
              districts.
            </li>
            <li>
              In other states, OND rainfall performed better than last year,
              resulting in improved soil moisture levels.
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Bar
            data={rainfallPerformanceData}
            options={rainfallPerformanceOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ONDRainfallPage;
