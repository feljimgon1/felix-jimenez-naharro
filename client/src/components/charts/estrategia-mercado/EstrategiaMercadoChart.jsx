import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";

import { estrategiaMercadoData } from '../../../data/estrategia-mercado/ESTRATEGIA_MERCADO_DATA';

ChartJS.register();


const values = getValues(estrategiaMercadoData);

function getValues(list) {

    var ventasData = list
        .filter(item => item.name === "Ventas alcanzadas por año" ? item.value : null)[0].value;
    var costesEmpleado = list
        .filter(item => item.name === "Crecimiento de gasto por empleado" ? item.value : null)[0].value;
    var costesAprovisionamiento = list
        .filter(item => item.name === "Aprovisionamiento/Ventas" ? item.value : null)[0].value;
    var costesOtrosGastos = list
        .filter(item => item.name === "Otros gastos de explotación/Ventas" ? item.value : null)[0].value;

    var costesAux = [costesEmpleado, costesAprovisionamiento, costesOtrosGastos]
    var costesData = costesAux[0].map((x, idx) => costesAux.reduce((sum, curr) => sum + curr[idx], 0));;
    
    return [ventasData, costesData];
}

const options = {
    maintainAspectRatio: false
}

const data = {
    labels: ["Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
    datasets: [
        {
            label: "Ventas",
            data: values[0],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Costes",
            data: values[1],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)"
        }
    ]
};

export const EstrategiaMercadoChart = () => {
    return <Line height={250} data={data} options={options} />
};