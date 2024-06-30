import { Bar } from 'react-chartjs-2';

const ChartDisplay = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Element ${index + 1}`),
    datasets: [
      {
        label: 'Dataset',
        data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Bar data={chartData} />
    </div>
  );
};

export default ChartDisplay;
