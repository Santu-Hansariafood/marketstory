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

const MoistureStressChart2 = () => {
  const maharashtraData = {
    labels: [
      "Ahmednagar",
      "Akola",
      "Amaravati",
      "Aurangabad",
      "Kolhapur",
      "Latur",
      "Nagpur",
      "Nashik",
      "Usmanabad",
      "Sangli",
    ],
    datasets: [
      {
        label: "16th Dec 2023",
        data: [-0.94, 9.56, 0.5, -0.85, 4.9, -8.75, 9.36, -4.58, -10.2, -7.63],
        backgroundColor: "#FFD700",
      },
      {
        label: "16th Dec 2024",
        data: [-6.53, 12.96, -0.53, 5.29, 2.57, -7.34, 1.24, -0.98, 1.03, 1.44],
        backgroundColor: "#008000",
      },
    ],
  };

  const andhraData = {
    labels: ["East Godavari", "Guntur", "Kurnool", "Srikakulam"],
    datasets: [
      {
        label: "16th Dec 2023",
        data: [-1.23, 5.19, 3.03, -18.38],
        backgroundColor: "#FFD700",
      },
      {
        label: "16th Dec 2024",
        data: [-0.8, -6.56, -3.35, -10.12],
        backgroundColor: "#008000",
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        MOISTURE STRESS IN KEY DISTRICTS OF AP & MAHARASHTRA
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Root Zone Soil Moisture Stress Index in Maharashtra
          </h3>
          <Bar data={maharashtraData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Root Zone Soil Moisture Stress Index in Andhra Pradesh
          </h3>
          <Bar data={andhraData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-green-800">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="p-2 border">Range of RZSM Values</th>
              <th className="p-2 border">Severity Level</th>
              <th className="p-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-2 border">Positive values (&gt;0)</td>
              <td className="p-2 border">No stress</td>
              <td className="p-2 border">Adequate soil moisture</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">0 to -5</td>
              <td className="p-2 border">Mild stress</td>
              <td className="p-2 border">Slight moisture deficiency</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">-5 to -10</td>
              <td className="p-2 border">Moderate stress</td>
              <td className="p-2 border">Noticeable water stress</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">-10 to -15</td>
              <td className="p-2 border">Severe stress</td>
              <td className="p-2 border">Significant water stress</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Less than -15</td>
              <td className="p-2 border">Extreme stress</td>
              <td className="p-2 border">Critical moisture deficiency</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-green-800 font-medium">
        • Soil moisture stress improved in most districts of Maharashtra and Andhra Pradesh in 2024 compared to 2023, with notable reductions in stress levels across key regions.
      </p>
    </div>
  );
};

export default MoistureStressChart2;
