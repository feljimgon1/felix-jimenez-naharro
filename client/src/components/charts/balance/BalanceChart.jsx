import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { activos, pasivos } from '../../../data/balance/BALANCE_DATA'

ChartJS.register(ArcElement, Tooltip, Legend);

const activosValues = getValues(activos);
const pasivosValues = getValues(pasivos);

function getValues(l) {
    var count = 0;
    for (let i = 0; i < l.length; i++) {
        count += l[i].value;
    }
    return count;
}

const data = {
    labels: ['Activos', 'Pasivos'],
    datasets: [
        {
            label: 'Balance',
            data: [activosValues, pasivosValues],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderWidth: 1,
        }
    ],
};

export const BalanceChart = () => {
    return (
        <Pie 
            width={"30%"}
            options={{ maintainAspectRatio: false }}
            data={data} />
    )
}