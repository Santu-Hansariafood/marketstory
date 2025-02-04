import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const EggExportsDashboard = () => {
  const pieData = {
    labels: ['Oman', 'Sri Lanka Dsr', 'Maldives', 'Qatar', 'Others'],
    datasets: [
      {
        data: [36, 19, 17, 15, 13],
        backgroundColor: ['#2E86C1', '#E67E22', '#229954', '#8E44AD', '#D35400'],
      },
    ],
  };

  const barData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: '2023-24',
        data: [34, 20, 22, 8, 26, 33, 53, 44, 38, 41, 38, 59],
        backgroundColor: '#8E44AD',
      },
      {
        label: '2024-25',
        data: [38, 18, 20, 27, 25, 28, 30, 0, 0, 0, 0, 0],
        backgroundColor: '#229954',
      },
    ],
  };

  return (
    <div className="p-6 bg-yellow-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
        Robust Starch demand to continue through 2024-25
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="bg-white shadow-lg p-4 rounded-2xl">
          <h2 className="text-xl font-semibold text-green-700 text-center mb-4">
            Country Wise Destination of Fowl Eggs from India
          </h2>
          <div className="flex justify-center">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="bg-white shadow-lg p-4 rounded-2xl">
          <h2 className="text-xl font-semibold text-green-700 text-center mb-4">
            Exports of in Shell Eggs to Oman (KMT)
          </h2>
          <div>
            <Bar data={barData} />
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-lg rounded-2xl w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Egg in Shell Exports in KMT</h2>
        <div className="flex justify-around text-green-800 font-semibold">
          <div>
            <p>2023-24 (Apr-Mar): 1257</p>
            <p>2023-24 (Apr-Oct): 610</p>
          </div>
          <div>
            <p>2024-25 E (Apr-Mar): 1150</p>
            <p>2024-25 E (Apr-Oct): 488</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-lg rounded-2xl w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Market Insights</h2>
        <ul className="list-disc pl-5 text-green-900">
          <li>Egg exports for FY 2024-25 are estimated to decline by 15% year-on-year, impacted by tightened import restrictions.</li>
          <li>Qatar has prohibited the import of Grade ‘B’ and ‘C’ eggs, while Oman suspended permits for Indian eggs in December 2024.</li>
          <li>These regulatory changes have significantly slowed the pace of exports, hindering overall performance.</li>
        </ul>
      </div>
    </div>
  );
};

export default EggExportsDashboard;
