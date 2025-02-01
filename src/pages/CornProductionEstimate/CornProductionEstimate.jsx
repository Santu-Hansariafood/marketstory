const CornProductionEstimate = () => {
  const tableHeaders = [
    "Particulars",
    "Kharif Crop APY Numbers",
    "Winter Crop APY Numbers",
    "Summer Crop APY Numbers",
    "Indian APY",
  ];

  const subHeaders = [
    ["", "2022-23", "2023-24", "2024-25"],
    ["", "2022-23", "2023-24", "2024-25"],
    ["", "2022-23", "2023-24", "2024-25"],
    ["", "2022-23", "2023-24", "2024-25"],
  ];

  const productionData1 = [
    ["Acreage", 8.05, 8.21, 8.64, 2.26, 2.31, 2.50, 0.43, 0.60, 0.66, 10.75, 11.11, 11.80],
    ["Yield", 2.94, 2.73, 2.94, 4.77, 4.41, 4.77, 2.61, 2.05, 2.60, 3.31, 3.04, 3.31],
    ["Production", 23.67, 22.41, 25.44, 10.80, 10.18, 11.93, 1.12, 1.23, 1.72, 35.60, 33.82, 39.09],
  ];

  const productionData2 = [
    ["Acreage", 8.05, 8.21, 8.64, 2.26, 2.31, 2.61, 0.43, 0.60, 0.66, 10.75, 11.11, 11.91],
    ["Yield", 2.94, 2.73, 2.94, 4.77, 4.41, 4.88, 2.61, 2.05, 2.60, 3.31, 3.04, 3.35],
    ["Production", 23.67, 22.41, 25.44, 10.80, 10.18, 12.71, 1.12, 1.23, 1.72, 35.60, 33.82, 39.86],
  ];

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-green-800 text-center mb-6">
        Maize Production Estimate for 2024-25 (Kharif + Winter + Summer)
      </h2>
      <h3 className="text-xl font-semibold text-yellow-700 mb-4">
        Production Estimates Projection as of 10th Dec 2024
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-green-700">
          <thead>
            <tr className="bg-green-800 text-white">
              {tableHeaders.map((header, index) => (
                <th key={index} colSpan={index === 0 ? 1 : 3} className="border border-green-700 p-2">
                  {header}
                </th>
              ))}
            </tr>
            <tr className="bg-green-700 text-white">
              {subHeaders.flat().map((subHeader, index) => (
                <th key={index} className="border border-green-700 p-2">{subHeader}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productionData1.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-yellow-100" : ""}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-green-700 p-2 text-center">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-xl font-semibold text-yellow-700 mt-8 mb-4">
        Production Estimates Projection as of 7th Jan 2025
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-green-700">
          <thead>
            <tr className="bg-green-800 text-white">
              {tableHeaders.map((header, index) => (
                <th key={index} colSpan={index === 0 ? 1 : 3} className="border border-green-700 p-2">
                  {header}
                </th>
              ))}
            </tr>
            <tr className="bg-green-700 text-white">
              {subHeaders.flat().map((subHeader, index) => (
                <th key={index} className="border border-green-700 p-2">{subHeader}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productionData2.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-yellow-100" : ""}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-green-700 p-2 text-center">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-700">
        <p className="text-green-900 font-semibold">
          • Winter Production revised upwards 0.77 million ton, increasing total production towards 40 million ton including the summer crop in 2024-25.
        </p>
        <p className="text-green-900 font-semibold mt-2">
          • Highest Maize production ever in India, attributed to Robust Ethanol eco-system and remunerative prices driving farmer intentions.
        </p>
      </div>
    </div>
  );
};

export default CornProductionEstimate;
