import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Import BarElement
  Title,
  Tooltip,
  Legend,
  BarController, // Import BarController
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement, // Register BarElement
  BarController, // Register BarController
  Title,
  Tooltip,
  Legend
);

const ChartDisplay = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Element ${index + 1}`),
    datasets: [
      {
        label: "Dataset",
        data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Elements",
        },
      },
      y: {
        title: {
          display: true,
          text: "Operations",
        },
      },
    },
  };
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartDisplay;
