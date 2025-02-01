import Card from "../../common/Card/Card";
import CardHeader from "../../common/CardHeader/CardHeader";
import CardTitle from "../../common/CardTitle/CardTitle";
import CardContent from "../../common/CardContent/CardContent";
import CardFooter from "../../common/CardFooter/CardFooter";
import BarChart from"../../common/BarChart/BarChart";

const Page7 = () => {
  const cornProgressData = {
    labels: [
      "1st week of Nov",
      "2nd week of Nov",
      "3rd week of Nov",
      "4th week of Nov",
      "1st week of Dec",
      "2nd week of Dec",
      "3rd week of Dec",
      "4th week of Dec",
    ],
    datasets: [
      {
        label: "2023",
        data: [0.18, 0.25, 0.34, 0.4, 0.65, 1.01, 1.67, 1.89],
        backgroundColor: "#2563EB",
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: "2024",
        data: [0.27, 0.32, 0.4, 0.5, 0.69, 1.01, 1.65, 1.75],
        backgroundColor: "#16A34A",
        borderRadius: 4,
        barThickness: 20,
      },
      {
        label: "% Change",
        data: [51, 34, 24, 25, 5, 0, -1, -8],
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

  const cornOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      x: {
        title: { display: true, text: "Weeks", color: "#333" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Million ha / % Change", color: "#333" },
        ticks: { stepSize: 10 },
      },
    },
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <Card className="flex-grow w-full max-w-6xl">
        <CardHeader>
          <CardTitle>Indian Winter Maize Sowing Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={cornProgressData} options={cornOptions} />
        </CardContent>
        <CardFooter text="By December 30th, Winter Maize acreage has risen by 8% from the previous year, in accordance with the projections specified in the November 2024 report." />
      </Card>
    </div>
  );
};

export default Page7;

