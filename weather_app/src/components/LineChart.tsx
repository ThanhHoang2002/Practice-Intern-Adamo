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
import { TemperatureInDay } from "../types/types";
import { formatHour, formatTemperature } from "../utils/format";

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
interface LineChartProps {
  temperatureInDay: TemperatureInDay[];
}
const LineChart = (props: LineChartProps) => {
  const { temperatureInDay } = props;  
const data = {
    labels: temperatureInDay?.map((item) => formatHour(item.hour)),
    datasets: [
        {
            label: "Temperature",
            data: temperatureInDay?.map((item) => formatTemperature(item.temperature)).concat([20,45]),
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
        display: false, 
      },
      datalabels: {
        align: 'top' as const,
        offset: 2,
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
