import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MoistureStressChart1 = () => {
  const dataKarnataka = {
    labels: ["Bagalkot", "Belagavi", "Ballari", "Chikkamagaluru", "Dharwad", "Gadag", "Haveri", "Kolar"],
    datasets: [
      {
        label: "16th Dec 2023",
        data: [-10.35, -9.62, -10.94, -5.54, -13.52, -9.7, -13.41, -11.19],
        backgroundColor: "#facc15",
      },
      {
        label: "16th Dec 2024",
        data: [0.85, 3.54, 1.54, 2.9, 11.15, 3.5, 10.43, 9.25],
        backgroundColor: "#7e22ce",
      },
    ],
  };

  const dataTelangana = {
    labels: ["Khammam", "Nizamabad", "Warangal (Rural)", "Nirmal", "Jagtial", "Kamareddy"],
    datasets: [
      {
        label: "16th Dec 2023",
        data: [1.15, 3.64, 0.74, 0.51, 2.63, 2.51],
        backgroundColor: "#7e22ce",
      },
      {
        label: "16th Dec 2024",
        data: [7.84, 7.31, -3.13, 5.27, 4.33, 7.53],
        backgroundColor: "#facc15",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        MOISTURE STRESS IN KEY DISTRICTS OF KARNATAKA & TELANGANA
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 text-center">
            ROOT ZONE SOIL MOISTURE STRESS INDEX IN KARNATAKA
          </h3>
          <Bar data={dataKarnataka} options={options} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 text-center">
            ROOT ZONE SOIL MOISTURE STRESS INDEX IN TELANGANA
          </h3>
          <Bar data={dataTelangana} options={options} />
        </div>
      </div>

      <div className="mt-6 border border-green-700 rounded-lg overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="py-2 px-4">Range of RZSM Values</th>
              <th className="py-2 px-4">Severity Level</th>
              <th className="py-2 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">Positive values (&gt;0)</td>
              <td className="py-2 px-4">No stress</td>
              <td className="py-2 px-4">Adequate soil moisture</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">0 to -5</td>
              <td className="py-2 px-4">Mild stress</td>
              <td className="py-2 px-4">Slight moisture deficiency</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">-5 to -10</td>
              <td className="py-2 px-4">Moderate stress</td>
              <td className="py-2 px-4">Noticeable water stress</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">-10 to -15</td>
              <td className="py-2 px-4">Severe stress</td>
              <td className="py-2 px-4">Significant water stress</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Less than -15</td>
              <td className="py-2 px-4">Extreme stress</td>
              <td className="py-2 px-4">Critical moisture deficiency</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="mt-4 text-green-700 font-medium">
        • Soil moisture stress improved significantly in Karnataka and Telangana in 2024 compared to 2023, with most districts showing reduced stress levels.
      </p>
    </div>
  );
};

export default MoistureStressChart1;
