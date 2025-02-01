import { Bar } from "react-chartjs-2";

const RegionalEthanolDemand = () => {
  const chartData = {
    labels: ["North", "East", "South", "Central", "West", "North East"],
    datasets: [
      {
        label: "Allocation (Bln Litre)",
        data: [1.82, 1.2, 0.83, 0.61, 0.22, 0.16],
        backgroundColor: "#0A2472",
      },
      {
        label: "FeedStock (Million MT)",
        data: [4.55, 3.0, 2.08, 1.53, 0.55, 0.4],
        backgroundColor: "#6A0DAD",
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-green-900 font-bold text-2xl mb-4">
        Regional Ethanol Demand Shifts Impact Corn Supply Dynamics
      </h2>
      <div className="bg-gray-100 p-4 rounded-md shadow">
        <Bar data={chartData} />
      </div>
      <div className="mt-4 p-4 bg-green-100 rounded-lg">
        <ul className="list-disc list-inside text-green-900">
          <li>
            Ethanol allocation for 2024-25 focuses more on North, East,
            Southern, and Central India, driving higher corn demand in these
            regions.
          </li>
          <li>
            This increased demand is expected to lower Rabi corn outflows from
            Bihar to South India.
          </li>
          <li>
            Improved Rabi corn acreages in Southern India may help balance the
            supply, offsetting reduced inflows from Bihar.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegionalEthanolDemand;
