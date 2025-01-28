import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Page4 = () => {
  const tableData = [
    {
      state: 'Madhya Pradesh',
      arrival2023: '32.62%',
      arrival2024: '52.55%',
      price2023: 2128,
      price2024: 2487,
      percentChange: '16.87%',
    },
    {
      state: 'Maharashtra',
      arrival2023: '18.87%',
      arrival2024: '14.97%',
      price2023: 2442,
      price2024: 2678,
      percentChange: '9.66%',
    },
    {
      state: 'Karnataka',
      arrival2023: '2.61%',
      arrival2024: '14.32%',
      price2023: 2286,
      price2024: 2509,
      percentChange: '10.63%',
    },
    {
      state: 'Rajasthan',
      arrival2023: '16.50%',
      arrival2024: '19.92%',
      price2023: 2053,
      price2024: 2562,
      percentChange: '24.79%',
    },
    {
      state: 'Telangana',
      arrival2023: '6.55%',
      arrival2024: '14.33%',
      price2023: 2262,
      price2024: 2545,
      percentChange: '12.51%',
    },
  ];

  const graphData = {
    labels: ['Madhya Pradesh', 'Karnataka', 'Maharashtra', 'Rajasthan', 'Telangana'],
    datasets: [
      {
        label: '2023 Corn Arrivals (Million Ton)',
        data: [1.61, 0.12, 0.27, 0.30, 0.06],
        backgroundColor: '#D97706',
      },
      {
        label: '2024 Corn Arrivals (Million Ton)',
        data: [3.11, 0.67, 0.53, 0.43, 0.12],
        backgroundColor: '#059669',
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Indian Corn Arrivals in Million Ton',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">
        Corn Arrivals 2024: Fueled by Larger Harvests and Improved Prices
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="order-2 md:order-1">
          <Bar data={graphData} options={graphOptions} />
        </div>

        {/* Table */}
        <div className="order-1 md:order-2">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-gray-300 p-2">State</th>
                <th className="border border-gray-300 p-2">Arrival as % of Production (2023)</th>
                <th className="border border-gray-300 p-2">Arrival as % of Production (2024)</th>
                <th className="border border-gray-300 p-2">Sep-Dec Corn Price Avg (2023) INR/Qtl</th>
                <th className="border border-gray-300 p-2">Sep-Dec Corn Price Avg (2024) INR/Qtl</th>
                <th className="border border-gray-300 p-2">% Change in Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 p-2">{row.state}</td>
                  <td className="border border-gray-300 p-2">{row.arrival2023}</td>
                  <td className="border border-gray-300 p-2">{row.arrival2024}</td>
                  <td className="border border-gray-300 p-2">{row.price2023}</td>
                  <td className="border border-gray-300 p-2">{row.price2024}</td>
                  <td className="border border-gray-300 p-2">{row.percentChange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Description */}
      <p className="mt-8 text-green-800 text-center">
        • Driven by improved price realizations for farmers in 2024, arrivals across major origins witnessed a twofold
        increase compared to 2023.
      </p>
    </div>
  );
};

export default Page4;
