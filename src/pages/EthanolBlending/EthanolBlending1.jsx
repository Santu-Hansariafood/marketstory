import { Bar, Line } from "react-chartjs-2";

const EthanolBlending1 = () => {
  const regionData = {
    labels: ["North", "South", "West", "East", "Central", "Northeast"],
    datasets: [
      {
        label: "Nov'23-Sep'24",
        data: [1.56, 1.58, 1.33, 0.73, 0.42, 0.2],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Nov'24-Oct'25",
        data: [3.2, 2.02, 1.56, 1.42, 0.9, 0.19],
        backgroundColor: "#FFC107",
      },
    ],
  };

  const changeData = {
    labels: ["North", "South", "West", "East", "Central", "Northeast"],
    datasets: [
      {
        label: "% Change",
        data: [105, 28, 17, 95, 114, -5],
        borderColor: "#1565C0",
        fill: false,
        type: "line",
      },
    ],
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3 bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-green-700 font-bold text-lg mb-4">
          Region-wise Ethanol Allocation in India
        </h2>
        <Bar data={regionData} />
      </div>

      <div className="w-full lg:w-2/3 bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-green-700 font-bold text-lg mb-4">
          Percentage Change in Allocation
        </h2>
        <Line data={changeData} />
      </div>

      <div className="w-full lg:w-1/3 bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-yellow-800 font-bold text-lg">Key Highlights</h2>
        <ul className="list-disc list-inside mt-2 text-green-800">
          <li>
            For ESY 2024-25, 9.29 billion litres of ethanol is allocated to
            manufacturers in two phases (Oct & Dec 2024).
          </li>
          <li>
            More emphasis is given to North, East, and Central regions due to
            increasing distillery capacities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EthanolBlending1;
