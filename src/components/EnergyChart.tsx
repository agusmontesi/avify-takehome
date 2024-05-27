import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface Energy {
  fuel: string;
  perc: number;
}

interface EnergyChartProps {
  data: Energy[];
}

const EnergyChart: React.FC<EnergyChartProps> = ({ data }) => {
  const predefinedColors = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.9)',
    'rgba(0, 128, 0, 0.8)',
    'rgba(255, 0, 255, 0.8)',
    'rgba(255, 255, 0, 0.8)',
  ];

  const generateColors = (length: number) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      colors.push(predefinedColors[i % predefinedColors.length]);
    }
    return colors;
  };

  const sortedData = data.slice().sort((a, b) => b.perc - a.perc);

  const chartData = {
    labels: sortedData.map(item => item.fuel),
    datasets: [
      {
        label: 'Energy Mix',
        data: sortedData.map(item => item.perc),
        backgroundColor: generateColors(sortedData.length),
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-3/4">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              position: 'right',
              labels: {
                font: {
                  size: 12,
                },
              },
            },
            title: {
              display: true,
              text: 'Energy Distribution',
              font: {
                size: 16,
                weight: 'bold',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default EnergyChart;
