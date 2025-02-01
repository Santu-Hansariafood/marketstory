import { Bar } from "react-chartjs-2";

const EthanolBlending = () => {
  const blendingData = {
    labels: [
      "2013-14",
      "2018-19",
      "2019-20",
      "2020-21",
      "2021-22",
      "2022-23",
      "2023-24 (Nov-Oct)",
    ],
    datasets: [
      {
        label: "Ethanol Blended (Billion Litres)",
        data: [0.38, 1.89, 1.731, 3.02, 4.34, 5.09, 6.75],
        backgroundColor: "#FFC107",
      },
    ],
  };

  const blendingRates = {
    labels: [
      "2013-14",
      "2019-20",
      "2020-21",
      "2021-22",
      "2022-23 (Dec-Nov)",
      "2023-24 (Nov-Oct)",
    ],
    datasets: [
      {
        label: "Target %",
        data: [1.6, 5, 10, 12, 12, 15],
        backgroundColor: "#FFC107",
      },
      {
        label: "Actual %",
        data: [1.6, 5, 8.1, 10, 12.06, 14.6],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3 bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-green-700 font-bold text-lg mb-4">
          Ethanol Blending in Billion Litres
        </h2>
        <Bar data={blendingData} />
      </div>

      <div className="w-full lg:w-2/3 bg-yellow-100 p-4 rounded-lg shadow-md">
        <h2 className="text-green-700 font-bold text-lg mb-4">
          Ethanol Blending Rates in India
        </h2>
        <Bar data={blendingRates} />
      </div>

      <div className="w-full lg:w-1/3 bg-green-100 p-4 rounded-lg shadow-md">
        <h2 className="text-yellow-800 font-bold text-lg">Key Highlights</h2>
        <ul className="list-disc list-inside mt-2 text-green-800">
          <li>
            Ethanol blending for 2023-24 is estimated at 6.75 billion liters
            with a blending rate of 14.6%, nearing the 15% target.
          </li>
          <li>
            Corn uptake in Ethanol for 2023-24 (Nov-Oct) is estimated to be
            around 6.75 Million Ton.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EthanolBlending;
