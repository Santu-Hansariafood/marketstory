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

const EthanolBlending4 = () => {
  const maizeData = {
    labels: ["NDJ 24", "FMA 25", "MJJ 25", "ASO 25"],
    datasets: [
      {
        label: "Maize Ethanol (Crore Liters)",
        data: [0.96, 0.92, 1.3, 1.68],
        backgroundColor: "#0D1B56",
      },
      {
        label: "Maize Feedstock (Million Tons)",
        data: [2.4, 2.3, 3.25, 4.2],
        backgroundColor: "#6A1B9A",
      },
    ],
  };

  const dfgData = {
    labels: ["NDJ 24", "FMA 25", "MJJ 25", "ASO 25"],
    datasets: [
      {
        label: "DFG Ethanol (Crore Liters)",
        data: [0.22, 0.21, 0.24, 0.4],
        backgroundColor: "#FFC107",
      },
      {
        label: "DFG Feedstock (Million Tons)",
        data: [0.52, 0.5, 0.57, 0.95],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-green-800 font-bold text-2xl mb-4">
        Maize Based Ethanol Demand Soars in ASO 25
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-center font-bold text-gray-800 mb-4">
            Quarterly Feed Stock Allocation & Requirement (Maize)
          </h3>
          <Bar data={maizeData} />
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-center font-bold text-gray-800 mb-4">
            Quarterly Feed Stock Allocation & Requirement (DFG)
          </h3>
          <Bar data={dfgData} />
        </div>
      </div>
      <div className="mt-6 p-4 bg-green-100 rounded-lg shadow">
        <ul className="list-disc list-inside text-green-800 font-medium">
          <li>
            ASO 25 has the highest maize ethanol allocation at 4.20 crore
            liters, requiring 1.68 million tons of maize feedstock.
          </li>
          <li>
            This allocation is expected to put pressure on the 2025 Kharif
            Harvest during the OND 2025 quarter.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EthanolBlending4;
