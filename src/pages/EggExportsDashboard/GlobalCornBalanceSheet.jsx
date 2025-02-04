const GlobalMaizeBalanceSheet = () => {
  const data = [
    {
      year: "2021/2022",
      beginningStocks: 296,
      production: 1219,
      imports: 185,
      totalSupply: 1700,
      exports: 207,
      consumption: 1179,
      totalDemand: 1386,
      endingStocks: 314,
      scRatio: "22.66%",
    },
    {
      year: "2022/2023",
      beginningStocks: 314,
      production: 1163,
      imports: 173,
      totalSupply: 1651,
      exports: 180,
      consumption: 1166,
      totalDemand: 1346,
      endingStocks: 305,
      scRatio: "22.63%",
    },
    {
      year: "2023/2024",
      beginningStocks: 305,
      production: 1230,
      imports: 197,
      totalSupply: 1731,
      exports: 193,
      consumption: 1222,
      totalDemand: 1415,
      endingStocks: 316,
      scRatio: "22.34%",
    },
    {
      year: "2024/25",
      beginningStocks: 316,
      production: 1218,
      imports: 184,
      totalSupply: 1718,
      exports: 193,
      consumption: 1229,
      totalDemand: 1422,
      endingStocks: 296,
      scRatio: "20.85%",
    },
  ];

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">
      Worldwide Maize Supply and Demand Summary
      </h1>
      <table className="table-auto w-full border-collapse border border-green-300">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="border border-green-300 px-4 py-2">Attributes</th>
            {data.map((item) => (
              <th key={item.year} className="border border-green-300 px-4 py-2">
                {item.year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            "beginningStocks",
            "production",
            "imports",
            "totalSupply",
            "exports",
            "consumption",
            "totalDemand",
            "endingStocks",
            "scRatio",
          ].map((attr, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-green-200" : "bg-white"}`}
            >
              <td className="border border-green-300 px-4 py-2 font-medium capitalize">
                {attr.replace(/([A-Z])/g, " $1")}
              </td>
              {data.map((item, i) => (
                <td
                  key={i}
                  className="border border-green-300 px-4 py-2 text-center"
                >
                  {item[attr]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 text-sm">
        <ul className="list-disc list-inside">
          <li>Production is slightly lower in 2024/25 compared to 2023/24.</li>
          <li>
            The Stock-to-Consumption ratio decreases further in 2024/25,
            indicating tighter supply.
          </li>
          <li>
            Total demand and consumption are slightly higher in 2024/25 than in
            2023/24.
          </li>
          <li>
            Thus, the tighter stocks as we move into 2025 might remain
            supportive for international Maize prices in the medium term.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalMaizeBalanceSheet;
