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

const MoistureStressChart = () => {
  const data = {
    labels: [
      "Bhagalpur",
      "Buxar",
      "Darbhanga",
      "Katihar",
      "Khagaria",
      "Madhubani",
      "Muzaffarpur",
      "Purnia",
      "Saharsa",
      "Samastipur",
      "Vaishali",
    ],
    datasets: [
      {
        label: "16th Dec 2023",
        data: [
          0.57, -1.03, -5.64, -6.88, -0.32, -5.26, -2.98, 0.63, -2.9, -9.54,
          -5.14,
        ],
        backgroundColor: "#FFD700",
      },
      {
        label: "16th Dec 2024",
        data: [
          3.14, -5.64, -17.92, -4.29, -5.44, -8.88, -11.91, -9.5, -13.69,
          -20.74, -20.16,
        ],
        backgroundColor: "#228B22",
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
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
        MOISTURE STRESS IN KEY DISTRICTS OF BIHAR
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-8">
        <table className="w-full border-collapse border border-green-700">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="border border-green-700 p-2">
                Range of RZSM Values
              </th>
              <th className="border border-green-700 p-2">Severity Level</th>
              <th className="border border-green-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-yellow-100">
              <td className="border border-green-700 p-2">
                Positive values (&gt;0)
              </td>
              <td className="border border-green-700 p-2">No stress</td>
              <td className="border border-green-700 p-2">
                Adequate soil moisture
              </td>
            </tr>
            <tr>
              <td className="border border-green-700 p-2">0 to -5</td>
              <td className="border border-green-700 p-2">Mild stress</td>
              <td className="border border-green-700 p-2">
                Slight moisture deficiency
              </td>
            </tr>
            <tr className="bg-yellow-100">
              <td className="border border-green-700 p-2">-5 to -10</td>
              <td className="border border-green-700 p-2">Moderate stress</td>
              <td className="border border-green-700 p-2">
                Noticeable water stress
              </td>
            </tr>
            <tr>
              <td className="border border-green-700 p-2">-10 to -15</td>
              <td className="border border-green-700 p-2">Severe stress</td>
              <td className="border border-green-700 p-2">
                Significant water stress
              </td>
            </tr>
            <tr className="bg-yellow-100">
              <td className="border border-green-700 p-2">Less than -15</td>
              <td className="border border-green-700 p-2">Extreme stress</td>
              <td className="border border-green-700 p-2">
                Critical moisture deficiency
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-700">
        <p className="text-green-900 font-semibold">
          • The Root Zone Soil Moisture Stress Index in key Maize-growing
          districts of Bihar shows a significant decline in 2024 compared to
          2023, reflecting increased moisture stress across most regions.
        </p>
      </div>
    </div>
  );
};

export default MoistureStressChart;
