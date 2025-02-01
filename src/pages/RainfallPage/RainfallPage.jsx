import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const RainfallPage = () => {
  // Data for Bar Chart
  const barChartData = {
    labels: ['Andhra Pradesh', 'Bihar', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'West Bengal', 'All India'],
    datasets: [
      {
        label: 'Normal Rainfall (mm)',
        data: [642, 595, 599, 593, 776, 258, 1167, 1152],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Actual Rainfall (mm)',
        data: [799, 596, 598, 578, 328, 389, 835, 869],
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '2024 Kharif Rainfall Performance (June-Sep) in Key Corn Rabi Origins in India',
        font: {
          size: 16,
        },
      },
    },
  };

  // Data for Line Graph
  const lineGraphData = {
    labels: ['Andhra Pradesh', 'Bihar', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Telangana', 'West Bengal'],
    datasets: [
      {
        label: '2023 Rainfall (mm)',
        data: [442, 740, 778, 613, 719, 949, 847],
        borderColor: 'rgba(75, 192, 192, 1)', // Green
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
      {
        label: '2024 Rainfall (mm)',
        data: [460, 354, 389, 364, 399, 446, 909],
        borderColor: 'rgba(255, 206, 86, 1)', // Yellow
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const lineGraphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Kharif Rainfall Performance - 2024 Vs 2023',
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-800 mb-6">Lower than Normal Kharif Rainfall in Bihar in 2024 (June-Sep)</h1>

        {/* Key Points */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-8">
          <ul className="list-disc list-inside text-green-800">
            <li>Bihar corn acreage to 35 percent of total corn cultivated area.</li>
            <li>Though Kharif rainfall is higher than last year in Bihar, yet it is below normal by 20 percent, thus affecting soil moisture levels in key corn-growing areas in the state.</li>
          </ul>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          {/* Line Graph */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Line data={lineGraphData} options={lineGraphOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RainfallPage;