// LineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  Filler,

);

const LineChart = () => {
const data = {
    labels: [
        "11:00",
        "14:00",
        "17:00",
        "20:00",
        "23:00",
        "02:00",
        "05:00",
        "08:00",
        
    ],
    datasets: [
        {
            label: "Temperature",
            data: [22, 27, 31, 31, 29, 28, 28, 27, 28,26,28,29,30,40,20],
            borderColor: "rgba(255, 193, 7, 1)",
            backgroundColor: "rgba(255, 193, 7, 0.2)", 
            fill: true,
            tension: 0.1,
            

        },
    ],
};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ẩn legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        display: false,
        grid: {
          display: false, 
        },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} datasetIdKey="true" />;
};

export default LineChart;
