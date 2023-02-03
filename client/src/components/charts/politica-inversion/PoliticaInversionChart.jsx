import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

ChartJS.register()

const options = {
    maintainAspectRatio: true
}

const data = {
    labels: ["Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 1000000, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: true,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)"
        }
    ]
};

export const PoliticaInversionChart = () => {
    return <Line height={250}  data={data} options={options} />
};
