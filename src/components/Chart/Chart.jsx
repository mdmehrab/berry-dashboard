import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Investment",
        backgroundColor: "#23C5C5", // Cyan color matching screenshot
        data: [60, 80, 70, 50, 40, 90, 200, 100, 120, 150, 200, 180],
      },
      {
        label: "Loss",
        backgroundColor: "#3C4852", // Dark gray/blue matching screenshot
        data: [30, 20, 40, 60, 20, 50, 100],
      },
      {
        label: "Profit",
        backgroundColor: "#4CE3D3", // Light teal matching screenshot
        data: [40, 50, 60, 70, 90, 100, 250, 150],
      },
      {
        label: "Maintenance",
        backgroundColor: "#F8F9FA", // Light gray
        data: [20, 40, 30],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Legend at bottom like in the screenshot
      },
      title: {
        display: true,
        text: "Total Growth", // Title for chart
        align: "start",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false, // Keep x-axis grid lines
          drawBorder: false, // Draw x-axis border
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true, // Remove y-axis grid lines
          drawBorder: true, // Don't draw y-axis border
        },
        ticks: {
          stepSize: 50, // Matches the y-axis increments seen in the screenshot
          callback: function (value) {
            return value; // Display values as they are without modifications
          },
        },
        beginAtZero: true,
        max: 300, // Max limit to match the chart scale
      },
    },
  };

  return (
    <div className="my-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
