import Card from "../../common/Card/Card";
import CardHeader from "../../common/CardHeader/CardHeader";
import CardTitle from "../../common/CardTitle/CardTitle";
import CardContent from "../../common/CardContent/CardContent";
import CardFooter from "../../common/CardFooter/CardFooter";
import BarChart from "../../common/BarChart/BarChart";

const Page6 = () => {
  const chartData = {
    labels: ["Wheat", "Gram", "Mustard", "Maize", "Paddy", "Barley"],
    datasets: [
      {
        label: "2023",
        data: [31.3, 9.32, 9.37, 1.75, 1.36, 1.44],
        backgroundColor: "#2563EB",
        borderRadius: 4,
        barThickness: 30,
      },
      {
        label: "2024",
        data: [31.97, 9.4, 9.87, 1.89, 1.44, 1.51],
        backgroundColor: "#16A34A",
        borderRadius: 4,
        barThickness: 30,
      },
      {
        label: "% Change",
        data: [2.15, 0.87, 5.58, 7.99, 5.56, 5.56],
        type: "line",
        borderColor: "#FACC15",
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        pointBackgroundColor: "#FACC15",
        pointBorderColor: "#FACC15",
        pointRadius: 5,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      x: {
        title: { display: true, text: "Commodities", color: "#333" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Million ha / % Change", color: "#333" },
        ticks: { stepSize: 5 },
      },
    },
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <Card className="flex-grow w-full max-w-6xl">
        <CardHeader>
          <CardTitle>
          Winter Acreage Trends Match Projections from the November 2024 Report.          
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={chartData} options={options} />
        </CardContent>
        <CardFooter text="All key commodities are in line with the Winter acreage trends forecasted in the November 2024 report." />
      </Card>
    </div>
  );
};

export default Page6;
