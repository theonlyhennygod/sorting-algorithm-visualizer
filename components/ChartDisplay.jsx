import { useEffect, useState } from "react";
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
import "../styles/Chart.css"; // Import the CSS file

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

const ChartDisplay = ({ data, currentElement, isSorting }) => {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (!isSorting && data.length > 0) {
      setBlinking(true);
      const timer = setTimeout(() => setBlinking(false), 2500); // Blink for 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSorting, data]);

  const chartData = {
    labels: data.map((_, index) => `Element ${index + 1}`),
    datasets: [
      {
        label: "Dataset",
        data,
        backgroundColor: data.map((_, index) =>
          index === currentElement
            ? "rgba(255, 9, 0, 1)"
            : blinking
            ? "rgba(0, 255, 0, 1)"
            : "rgba(0, 255, 0, 1)"
        ),
        borderColor: data.map((_, index) =>
          index === currentElement
            ? "rgba(255, 9, 0, 1)"
            : blinking
            ? "rgba(0, 255, 0, 1)"
            : "rgba(0, 255, 0, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
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

  return (
    <div className="chart-container">
      <div className="chart">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartDisplay;
