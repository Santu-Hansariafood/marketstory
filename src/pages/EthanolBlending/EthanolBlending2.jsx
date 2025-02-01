import { Bar } from "react-chartjs-2";

const EthanolBlending2 = () => {
  const cycle1Data = {
    labels: ["Sugar Cane Juice", "B Heavy", "C Heavy", "DFG", "Maize"],
    datasets: [
      {
        label: "Offers Received (Bln Litre)",
        data: [2.32, 1.47, 0.11, 1.06, 4.74],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Allotted (Bln Litre)",
        data: [1.89, 1.14, 0.09, 0.94, 4.31],
        backgroundColor: "#FFC107",
      },
    ],
  };

  const cycle2Data = {
    labels: ["Sugar Cane Juice", "B Heavy", "C Heavy", "DFG", "Maize"],
    datasets: [
      {
        label: "Offers Received (Bln Litre)",
        data: [0.07, 0.19, 0.0, 0.14, 0.59],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Allotted (Bln Litre)",
        data: [0.07, 0.18, 0.0, 0.14, 0.54],
        backgroundColor: "#FFC107",
      },
    ],
  };

  const totalAllocationData = {
    labels: ["Sugar Cane Juice", "B Heavy", "C Heavy", "DFG", "Maize"],
    datasets: [
      {
        label: "Allotted (Bln Litre)",
        data: [1.96, 5.28, 0.09, 1.07, 4.85],
        backgroundColor: "#1565C0",
      },
      {
        label: "Feed Stock Required (Million MT)",
        data: [28.0, 5.28, 0.41, 2.57, 12.13],
        backgroundColor: "#8E24AA",
      },
    ],
  };

  return (
    <div className="p-6 flex flex-col gap-6">
      {/* Top Row - Cycle 1 & Cycle 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-green-800 font-bold text-xl mb-4">
            Ethanol Allocation During Cycle-1
          </h2>
          <Bar data={cycle1Data} />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-green-800 font-bold text-xl mb-4">
            Ethanol Allocation During Cycle-2
          </h2>
          <Bar data={cycle2Data} />
        </div>
      </div>

      {/* Bottom Row - Total Allocation & Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-yellow-800 font-bold text-xl mb-4">
            Total Ethanol Allotted & Feed Stocks Requirement
          </h2>
          <Bar data={totalAllocationData} />
        </div>

        <div className="bg-gray-50 border border-gray-300 p-6 rounded-lg shadow-lg">
          <h2 className="text-yellow-800 font-bold text-xl mb-4">
            Key Highlights
          </h2>
          <ul className="list-disc list-inside mt-2 text-green-800 space-y-2">
            <li>
              Corn dominates feedstock allocation in Cycle-1 (Oct'24) and
              Cycle-2 (Dec'24) tenders.
            </li>
            <li>
              4.85 billion litres of ethanol production is planned from maize.
            </li>
            <li>
              Approximately 12.13 million tons of corn will be needed at a
              recovery rate of 400 litres per ton.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EthanolBlending2;
