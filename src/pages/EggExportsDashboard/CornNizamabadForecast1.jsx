import React from "react";

const CornNizamabadForecast1 = () => {
  const forecastData = [
    { quarter: "JFM'25", high: 2640, low: 2400, avg: 2510 },
    { quarter: "AMJ'25", high: 2540, low: 2320, avg: 2420 },
    { quarter: "JAS'25", high: 2890, low: 2390, avg: 2620 },
    { quarter: "OND'25", high: 2800, low: 2580, avg: 2680 },
    { quarter: "JFM'26", high: 2760, low: 2490, avg: 2590 },
  ];

  return (
    <div className="p-4 bg-green-50 rounded-lg shadow-lg">
      {/* Table Heading */}
      <h2 className="text-green-700 text-xl font-semibold mb-4">
        Maize Nizamabad - Long Term Forecast
      </h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-green-300 rounded-lg">
          <thead className="bg-green-200">
            <tr>
              <th className="py-2 px-4 text-left text-green-900">Quarter</th>
              <th className="py-2 px-4 text-left text-green-900">High</th>
              <th className="py-2 px-4 text-left text-green-900">Low</th>
              <th className="py-2 px-4 text-left text-green-900">Average</th>
            </tr>
          </thead>
          <tbody>
            {forecastData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-yellow-100" : "bg-yellow-50"}
              >
                <td className="py-2 px-4">{row.quarter}</td>
                <td className="py-2 px-4">{row.high}</td>
                <td className="py-2 px-4">{row.low}</td>
                <td className="py-2 px-4">{row.avg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Forecast Details */}
      <div className="mt-4 text-green-800 text-sm">
        <p>
          • Nizamabad Maize Prices are expected to trade towards 2600 INR per
          Qtl levels by Mid-Feb or Early March 2025 and retrace towards INR
          2320-2350 in AMJ'25 per Qtl before bouncing back towards INR
          2850-2900 per Qtl in JAS 2025 Quarter.
        </p>
      </div>
    </div>
  );
};

export default CornNizamabadForecast1;
