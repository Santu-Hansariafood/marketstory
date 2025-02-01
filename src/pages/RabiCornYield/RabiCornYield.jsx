const RabiCornYield = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Yield Estimate for 2024-25 Winter Maize Crop
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="border px-4 py-2">Year</th>
              <th className="border px-4 py-2">June-Sep</th>
              <th className="border px-4 py-2">Oct</th>
              <th className="border px-4 py-2">Nov</th>
              <th className="border px-4 py-2">Dec</th>
              <th className="border px-4 py-2">OND Rainfall</th>
              <th className="border px-4 py-2">June-Dec Rainfall</th>
              <th className="border px-4 py-2">Yield (MT/HA)</th>
              <th className="border px-4 py-2">ENSO Condition</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2019", 972, 110, 32, 19, 161, 1133, 4.63, "Normal"],
              ["2020", 957, 78, 29, 17, 125, 1082, 4.72, "Moderate La-Nina"],
              ["2021", 874, 101, 57, 21, 178, 1052, 5.08, "Moderate La-Nina"],
              ["2022", 925, 112, 19, 14, 144, 1069, 4.77, "Weak La-Nina"],
              ["2023", 822, 51, 35, 26, 111, 933, 4.41, "Strong El-Nino"],
              ["2024", 934, 75, 14, 28, 117, 1051, 4.88, "Normal"],
            ].map((row, index) => (
              <tr key={index} className="border text-center">
                {row.map((cell, i) => (
                  <td key={i} className="border px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="border px-4 py-2">Marketing Year</th>
              <th className="border px-4 py-2">Yield (MT per Ha)</th>
              <th className="border px-4 py-2">Kharif Rainfall in MM</th>
              <th className="border px-4 py-2">Annual Rainfall in MM</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2022-23", 4.77, 925, 1258],
              ["2023-24", 4.41, 822, 1104],
              ["2024-25 (Dec 24 Est)", 4.77, 934, 1205],
              ["2024-25 (Jan'25 Est)", 4.88, 934, 1205],
            ].map((row, index) => (
              <tr key={index} className="border text-center">
                {row.map((cell, i) => (
                  <td key={i} className="border px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-green-900">
        <ul className="list-disc ml-6">
          <li>
            Delta correlation between OND Rainfall and the yield in the last 5 years is 0.81.
          </li>
          <li>
            The Kharif rainfall is well above normal at 934 mm.
          </li>
          <li>
            OND rainfall is lower than in 2020, but soil moisture levels are good across 70% of regions.
          </li>
          <li>
            Winter Yields are estimated at 4.88 MT per Ha for Dec 2025.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RabiCornYield;
