const data = [
  [
    "Attributes",
    "2022/2023",
    "2023/2024",
    "2024/25 Dec 24 Est",
    "2024/25 Jan'25 Est",
    "% Change Over last year",
  ],
  ["Area Harvested (Ha)", "10.74", "11.11", "11.91", "11.91", "7.2%"],
  ["Beginning Stocks", "2.40", "3.23", "1.95", "1.95", "-39.7%"],
  ["Production", "35.6", "33.82", "39.08", "39.86", "17.9%"],
  ["Imports", "0.003", "0.77", "1.80", "1.90", "146.8%"],
  ["Total Supply", "38.003", "37.82", "42.83", "43.71", "15.6%"],
  ["Exports", "3.27", "0.45", "0.55", "0.40", "-11.1%"],
  ["Demand", "31.50", "35.42", "40.58", "41.66", "17.6%"],
  ["Ending Stocks", "3.23", "1.95", "1.70", "1.65", "-15.3%"],
  ["S/C ratio", "10.26%", "5.50%", "4.18%", "3.96%", "-28.0%"],
];

const MaizeMarketComponent = () => {
  return (
    <div className="p-6 bg-green-50 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-6">
        India's Maize: Market awaiting oncoming Harvest in India
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-green-800">
          <thead className="bg-green-800 text-white">
            <tr>
              {data[0].map((header, index) => (
                <th
                  key={index}
                  className="border border-green-800 px-4 py-2 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-green-100" : "bg-green-50"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-green-800 px-4 py-2"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-sm text-green-900 space-y-2">
        <p>
          • Maize production is revised higher towards 39.86 million tons and
          there is scope for further upward revision given the current market
          drivers.
        </p>
        <p>
          • Stock-to-use ratio would continue to stay around 4% in the wake of
          robust offtake by ethanol and compensated by imports and reduced
          exports.
        </p>
      </div>
    </div>
  );
};

export default MaizeMarketComponent;
