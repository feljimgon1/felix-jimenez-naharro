const activos = [
    { name: 'Activo no corriente', value: 0, composed: true },
    { name: 'Inmovilizado inmaterial', value: 5000, composed: false },
    { name: 'Inmovilizado material', value: 20000, composed: false },
    { name: 'Otros activos fijos', value: 0, composed: false },
    { name: 'Activo corriente', value: 0, composed: true },
    { name: 'Existencias', value: 0, composed: false },
    { name: 'Deudores', value: 2700, composed: false },
    { name: 'Otros activos líquidos', value: 3000, composed: false }
];

const pasivos = [
    { name: 'Fondos propios', value: 0, composed: true },
    { name: 'Capital suscrito', value: 10000, composed: false },
    { name: 'Otros fondos propios', value: 0, composed: false },
    { name: 'Pasivo no corriente', value: 0, composed: true },
    { name: 'Deuda antigua', value: 18700, composed: false },
    { name: 'Deuda nueva', value: 0, composed: false },
    { name: 'Provisiones', value: 0, composed: false },
    { name: 'Pasivo corriente', value: 0, composed: true },
    { name: 'Deudas financieras', value: 0, composed: false },
    { name: 'Acreedores comerciales', value: 2000, composed: false },
    { name: 'Otros pasivos líquidos', value: 0, composed: false }
]

// const status = 'Waiting for review'
const statusPasivo = 'Review in progress'
const statusActivo = 'Review finished'

module.exports = {
    activos, pasivos, statusActivo, statusPasivo
}
