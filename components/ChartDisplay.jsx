import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

const ChartDisplay = ({ data, currentElement }) => {
  const chartData = {
    labels: data.map((_, index) => `Element ${index + 1}`),
    datasets: [
      {
        label: "Dataset",
        data,
        backgroundColor: data.map((_, index) =>
          index === currentElement ? "rgba(255, 9, 0, 1)" : "rgba(75, 192, 192, 1)"
        ),
        borderColor: data.map((_, index) =>
          index === currentElement ? "rgba(255, 9, 0, 1)" : "rgba(75, 192, 192, 1)"
        ),
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
          text: "Values",
        },
      },
    },
    animation: {
      duration: 100, // Adjust the duration as needed
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartDisplay;