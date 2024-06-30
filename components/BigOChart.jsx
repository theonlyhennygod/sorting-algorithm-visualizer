import React from 'react';
import { Line } from 'react-chartjs-2';

const BigOChart = ({ bigOData }) => {
  const chartData = {
    labels: bigOData.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Big O Notation',
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        data: bigOData,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mt-8">
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Big O Notation',
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default BigOChart;
