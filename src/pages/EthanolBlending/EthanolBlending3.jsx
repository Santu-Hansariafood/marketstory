import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const EthanolBlending3 = () => {
  const data = {
    labels: ["Sugar Cane Juice", "B Heavy", "C Heavy", "DFG", "Maize"],
    datasets: [
      {
        label: "Feed Stock Required (Million MT)",
        data: [28.0, 5.28, 0.41, 2.57, 12.13],
        backgroundColor: "#FFC107", // Yellow color
        borderRadius: 5,
      },
      {
        label: "% of Feed Stock Allocation in Total Production",
        data: [7.37, 1.39, 0.11, 1.77, 30.33],
        backgroundColor: "#4CAF50", // Green color
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#333" },
      },
      y: {
        grid: { color: "#ccc" },
        ticks: { color: "#333" },
      },
    },
    plugins: {
      legend: { position: "top", labels: { color: "#333" } },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Maize's Key Role in 2024-25 (Nov'24 - Oct'25) Ethanol Production
      </h2>
      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
      <div className="mt-4 bg-green-50 p-4 rounded-lg">
        <ul className="list-disc pl-5 text-green-700">
          <li>
            Maize dominates the feedstock allocation, with 4.85 billion liters
            expected to be produced in 2024-25 ESY, making up52.2% of the total
            feedstock share.
          </li>
          <li>
            In terms of allocation in total feed stock production, Maize
            diversion for ethanol amounts to30%, which could possibly squeeze
            the supplies as we move into JAS 2025.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EthanolBlending3;
