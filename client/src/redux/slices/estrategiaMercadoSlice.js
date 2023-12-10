import { createSlice } from "@reduxjs/toolkit"

const estrategiaMercado = {
  data: [
    { name: 'Objetivo de ventas', value: 0, composed: true },
    { name: 'Ventas alcanzadas por año', value: [0, 0, 0, 0, 0], composed: false },
    { name: 'Número de empleados por año', value: [0, 0, 0, 0, 0], composed: false },
    { name: 'Gasto por empleado y año', value: [0, 0, 0, 0, 0], composed: false },
    { name: 'Crecimiento de gasto por empleado', value: [0, 0, 0, 0, 0], composed: false },
    { name: 'Aprovisionamiento por ventas', value: [0, 0, 0, 0, 0], composed: false },
    { name: 'Otros gastos de explotación por ventas', value: [0, 0, 0, 0, 0], composed: false },
  ],
  status: 'Review in progress'
}

const initialState = {
  estrategiaMercado: estrategiaMercado,
}

export const estrategiaMercadoSlice = createSlice({
  name: 'estrategiaMercado',
  initialState,
  reducers: {
    setEstrategiaMercadoData: (state, action) => {
      state.estrategiaMercado.data = action.payload
    },
  }
})

export const { setEstrategiaMercadoData } = estrategiaMercadoSlice.actions

export default estrategiaMercadoSlice.reducer