import { createSlice } from "@reduxjs/toolkit"

const cuentaPerdidasGanancias = {
  data: [
    { name: 'Ingresos de explotación', value: 0, composed: true },
    { name: 'Importe neto cifra de ventas', value: 0, composed: false },
    { name: 'Otros ingresos de explotación', value: 0, composed: false },
    { name: 'TRPPI', value: 0, composed: false },
    { name: 'Costes de explotación', value: 0, composed: true },
    { name: 'Consumo mercaderias materias', value: 0, composed: false },
    { name: 'Gasto de personal', value: 0, composed: false },
    { name: 'Otros gastos de explotación', value: 0, composed: false },
    { name: 'EBITDA', value: 0, composed: true },
    { name: 'CAT', value: 0, composed: false },
    { name: 'BAIT', value: 0, composed: true },
    { name: 'Ingresos financieros', value: 0, composed: false },
    { name: 'Gastos financieros', value: 0, composed: false },
    { name: 'Resultado financiero', value: 0, composed: true },
    { name: 'Resultado ordinario antes de impuestos', value: 0, composed: true },
    { name: 'Impuesto sobre sociedades', value: 0, composed: false },
    { name: 'Resultado actividades ordinarias', value: 0, composed: true },
    { name: 'Resultado del ejercicio', value: 0, composed: true },
    { name: 'Ingresos extraordinarios', value: 0, composed: false },
    { name: 'Resultado actividades extraordinarias', value: 0, composed: true },
    { name: 'Gastos extraordinarios', value: 0, composed: false },
  ],
  status: 'Review in progress'
}

const initialState = {
  cuentaPerdidasGanancias: cuentaPerdidasGanancias,
}

export const cuentaPerdidasGananciasSlice = createSlice({
  name: 'cuentaPerdidasGanancias',
  initialState,
  reducers: {
    setCuentaPerdidasGananciasData: (state, action) => {
      state.cuentaPerdidasGanancias.data = action.payload
    },
  }
})

export const { setCuentaPerdidasGananciasData } = cuentaPerdidasGananciasSlice.actions

export default cuentaPerdidasGananciasSlice.reducer