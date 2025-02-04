const Page3 = () => {
  const data = [
    {
      state: "TAMILNADU",
      market: "NAMAKKAL",
      nov: 2520,
      dec: 2530,
      jan: 2460,
      changeNov: -60,
      changeDec: -70,
    },
    {
      state: "MAHARASHTRA",
      market: "SANGLI",
      nov: 2375,
      dec: 2383,
      jan: 2537,
      changeNov: 162,
      changeDec: 154,
    },
    {
      state: "MAHARASHTRA",
      market: "SAHYADRI STARCH",
      nov: 2320,
      dec: 2310,
      jan: 2425,
      changeNov: 105,
      changeDec: 115,
    },
    {
      state: "KARNATAKA",
      market: "HOSKOTE",
      nov: 2420,
      dec: 2500,
      jan: 2535,
      changeNov: 115,
      changeDec: 35,
    },
    {
      state: "KARNATAKA",
      market: "GOKAK",
      nov: 2375,
      dec: 2390,
      jan: 2460,
      changeNov: 85,
      changeDec: 70,
    },
    {
      state: "KARNATAKA",
      market: "BAGALKOT",
      nov: 2300,
      dec: 2320,
      jan: 2400,
      changeNov: 100,
      changeDec: 80,
    },
    {
      state: "TELANGANA",
      market: "NIZAMABAD",
      nov: 2445,
      dec: 2450,
      jan: 2459,
      changeNov: 14,
      changeDec: 9,
    },
    {
      state: "BIHAR",
      market: "GULABBAGH",
      nov: 2750,
      dec: 2730,
      jan: 2742,
      changeNov: -8,
      changeDec: 12,
    },
    {
      state: "MADHYA PRADESH",
      market: "CHHINDWARA",
      nov: 2425,
      dec: 2430,
      jan: 2475,
      changeNov: 50,
      changeDec: 45,
    },
    {
      state: "DELHI",
      market: "DELHI",
      nov: 2600,
      dec: 2600,
      jan: 2625,
      changeNov: 25,
      changeDec: 25,
    },
  ];

  return (
    <div className="p-6 bg-green-50 h-[100vh] flex flex-col">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Indian Market Maize Price Review
      </h1>
      <div className="overflow-x-auto flex-1">
        <table className="table-auto w-full border-collapse border border-green-400">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-green-400 p-3">STATE</th>
              <th className="border border-green-400 p-3">MARKET</th>
              <th className="border border-green-400 p-3">07-11-2024</th>
              <th className="border border-green-400 p-3">10-12-2024</th>
              <th className="border border-green-400 p-3">06-01-2025</th>
              <th className="border border-green-400 p-3">
                Change in Price from Nov 2024 (INR per Qtl) (JAN - NOV)
              </th>
              <th className="border border-green-400 p-3">
                Change in Price from Dec 2024 (INR per Qtl) (JAN - DEC)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-green-100" : "bg-green-50"}
              >
                <td className="border border-green-400 p-3 text-center">
                  {row.state}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.market}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.nov}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.dec}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.jan}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.changeNov}
                </td>
                <td className="border border-green-400 p-3 text-center">
                  {row.changeDec}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-green-800 text-center">
        • The start of the Maize harvest in Tamil Nadu has put downward pressure on local prices, while Maize prices in other regions have stayed stable or increased since November 2024.
      </p>
    </div>
  );
};

export default Page3;
