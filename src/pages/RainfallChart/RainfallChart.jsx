import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RainfallChart = () => {
  const rainfallData = [
    { state: "Andhra Pradesh", rainfall2023: 984, rainfall2024: 1136 },
    { state: "Bihar", rainfall2023: 863, rainfall2024: 818 },
    { state: "Karnataka", rainfall2023: 566, rainfall2024: 1030 },
    { state: "Maharashtra", rainfall2023: 213, rainfall2024: 900 },
    { state: "Tamil Nadu", rainfall2023: 900, rainfall2024: 1052 },
    { state: "Telangana", rainfall2023: 93.1, rainfall2024: 1052 },
    { state: "West Bengal", rainfall2023: 85, rainfall2024: 77 },
    { state: "All India", rainfall2023: 53, rainfall2024: 86 },
  ];

  const data = {
    labels: rainfallData.map((data) => data.state),
    datasets: [
      {
        label: "Rainfall 2023 (mm)",
        data: rainfallData.map((data) => data.rainfall2023),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Rainfall 2024 (mm)",
        data: rainfallData.map((data) => data.rainfall2024),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">June-Dec Rainfall Performance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RainfallChart;
