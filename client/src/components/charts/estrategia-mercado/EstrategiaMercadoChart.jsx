import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

import { estrategiaMercadoData } from '../../../data/estrategia-mercado/ESTRATEGIA_MERCADO_DATA';

ChartJS.register()

const options = {
    maintainAspectRatio: false
}

const ventasValues = getVentas(estrategiaMercadoData);

function getVentas(l) {
    let ventas = l.filter(data=>data.name==='Objetivo de Ventas año 5');
    return ventas[0].value.map((data, index)=>{
        return ventas[0].value[4]
    })
}

const data = {
    labels: ["Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
    datasets: [
        {
            label: "Ventas",
            data: [33, 53, 85, 41, 44],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Costes",
            data: [33, 25, 35, 51, 54],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)"
        }
    ]
};

export const EstrategiaMercadoChart = () => {
    return <Line height={250} data={data} options={options} />
};