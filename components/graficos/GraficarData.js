import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import classes from "./GraficarData.module.css";

function GraficarData(props) {
  const dataGraficar = props.dataGraficar;

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          font: {
            size: 20,
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Horas",
          font: {
            size: 20,
          },
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Cantidad de capturas",
          font: {
            size: 20,
          },
        },
        ticks: {
          stepSize: 1,
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div className={classes.graf}>
      <Bar data={dataGraficar} options={options} />
    </div>
  );
}
export default GraficarData;
