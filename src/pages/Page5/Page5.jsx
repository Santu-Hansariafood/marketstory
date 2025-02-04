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
  const data = {
    labels: ["Wheat", "Gram", "Mustard", "Maize", "Paddy", "Barley"],
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
    labels: ["Wheat", "Gram", "Mustard", "Maize", "Paddy", "Barley"],
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
      <div className="bg-white rounded-lg shadow-md p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
        Winter Sown Area Patterns Match November 2024 Report Estimates.
        </h1>
        <p className="text-gray-600 mt-2">
        Key observations on the progress of Winter sowing and acreage comparisons for the 2023-24 season.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Status of Key Rabi Crop Sowing as of December 30th.
          </h2>
          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: { legend: { position: "top" } },
            }}
          />
        </div>
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
