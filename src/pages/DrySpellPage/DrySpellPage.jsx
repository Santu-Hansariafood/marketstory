import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const DrySpellPage = () => {
  // Data for Rainfall Deviation Bar Chart
  const rainfallDeviationData = {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Normal Rainfall (mm)',
        data: [120, 80, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Green
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Actual Rainfall (mm)',
        data: [90, 60, 40],
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const rainfallDeviationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'OND Rainfall in Bihar (Oct-Dec 2024)',
        font: {
          size: 16,
        },
      },
    },
  };

  // Data for Rainfall Performance Line Graph
  const rainfallPerformanceData = {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Rainfall Deviation (%)',
        data: [-25, -25, -33], // Negative values indicate below-normal rainfall
        borderColor: 'rgba(255, 99, 132, 1)', // Red for deviation
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const rainfallPerformanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Rainfall Deviation in Bihar (Oct-Dec 2024)',
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
          text: 'Deviation (%)',
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-800 mb-6">Dry Spell Persists in Bihar (Oct-Dec 2024)</h1>

        {/* Key Points */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-8">
          <ul className="list-disc list-inside text-green-800">
            <li>In Bihar, below-normal Kharif rainfall is followed by another dry spell from October till December.</li>
            <li>Though corn sowing would improve in these conditions, yield performance needs to be watched if rainfall does not improve in December 2024.</li>
          </ul>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rainfall Deviation Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={rainfallDeviationData} options={rainfallDeviationOptions} />
          </div>

          {/* Rainfall Performance Line Graph */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Line data={rainfallPerformanceData} options={rainfallPerformanceOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrySpellPage;