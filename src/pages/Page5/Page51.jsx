const Page51 = () => {
  const tableData = [
    {
      commodity: "Paddy",
      acres2023: 4.33,
      acres2024: 4.08,
      change: 0.12,
      percentChange: "3.06%",
      share2023: "5.78%",
      share2024: "5.87%",
    },
    {
      commodity: "Wheat",
      acres2023: 31.4,
      acres2024: 31.83,
      change: 0.8,
      percentChange: "2.51%",
      share2023: "45.11%",
      share2024: "45.60%",
    },
    {
      commodity: "Corn",
      acres2023: 2.26,
      acres2024: 2.31,
      change: 0.19,
      percentChange: "8.43%",
      share2023: "3.27%",
      share2024: "3.50%",
    },
    {
      commodity: "Barley",
      acres2023: 0.63,
      acres2024: 0.55,
      change: -0.01,
      percentChange: "-2.59%",
      share2023: "0.78%",
      share2024: "0.75%",
    },
    {
      commodity: "Gram",
      acres2023: 10.47,
      acres2024: 9.59,
      change: 0.24,
      percentChange: "2.49%",
      share2023: "13.58%",
      share2024: "13.73%",
    },
    {
      commodity: "Mustard/Canola",
      acres2023: 8.85,
      acres2024: 9.18,
      change: -0.31,
      percentChange: "-3.37%",
      share2023: "13.01%",
      share2024: "12.40%",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto text-green-500">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Winter Acreage Projections
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2">Commodity</th>
            <th className="border border-gray-200 px-4 py-2">
              2022-23 (Million Ha)
            </th>
            <th className="border border-gray-200 px-4 py-2">
              2023-24 (Million Ha)
            </th>
            <th className="border border-gray-200 px-4 py-2">
              Change (Million Ha)
            </th>
            <th className="border border-gray-200 px-4 py-2">% Change</th>
            <th className="border border-gray-200 px-4 py-2">
              Share 2023-24 (%)
            </th>
            <th className="border border-gray-200 px-4 py-2">
              Share 2024-25 (%)
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} ${
                row.change > 0 ? "bg-green-50" : row.change < 0 ? "bg-red-50" : ""
              }`}
            >
              <td className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                {row.commodity}
              </td>
              <td className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                {row.acres2023}
              </td>
              <td className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                {row.acres2024}
              </td>
              <td
                className={`border border-gray-200 px-4 py-2 whitespace-nowrap ${
                  row.change > 0 ? "text-green-600" : row.change < 0 ? "text-red-600" : ""
                }`}
              >
                {row.change}
              </td>
              <td
                className={`border border-gray-200 px-4 py-2 whitespace-nowrap ${
                  row.percentChange.startsWith("-") ? "text-red-600" : "text-green-600"
                }`}
              >
                {row.percentChange}
              </td>
              <td className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                {row.share2023}
              </td>
              <td className="border border-gray-200 px-4 py-2 whitespace-nowrap">
                {row.share2024}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page51;
