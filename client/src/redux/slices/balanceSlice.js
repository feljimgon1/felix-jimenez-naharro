import { createSlice } from "@reduxjs/toolkit"

const activos = {
  data: [
    { name: 'Activo no corriente', value: 0, composed: true },
    { name: 'Inmovilizado inmaterial', value: 0, composed: false },
    { name: 'Inmovilizado material', value: 0, composed: false },
    { name: 'Otros activos fijos', value: 0, composed: false },
    { name: 'Activo corriente', value: 0, composed: true },
    { name: 'Existencias', value: 0, composed: false },
    { name: 'Deudores', value: 0, composed: false },
    { name: 'Otros activos líquidos', value: 0, composed: false },
  ],
  status: 'Waiting for review'
}

const pasivos = {
  data: [
    { name: 'Fondos propios', value: 0, composed: true },
    { name: 'Capital suscrito', value: 0, composed: false },
    { name: 'Otros fondos propios', value: 0, composed: false },
    { name: 'Pasivo no corriente', value: 0, composed: true },
    { name: 'Deuda antigua', value: 0, composed: false },
    { name: 'Deuda nueva', value: 0, composed: false },
    { name: 'Provisiones', value: 0, composed: false },
    { name: 'Pasivo corriente', value: 0, composed: true },
    { name: 'Deudas financieras', value: 0, composed: false },
    { name: 'Acreedores comerciales', value: 0, composed: false },
    { name: 'Otros pasivos líquidos', value: 0, composed: false }
  ],
  status: 'Waiting for review'
}

const initialState = {
  activos: activos,
  pasivos: pasivos,
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setActivosData: (state, action) => {
      state.activos.data = action.payload
    },
    setPasivosData: (state, action) => {
      state.pasivos.data = action.payload
    }
  }
})

export const { setActivosData, setPasivosData } = balanceSlice.actions

export default balanceSlice.reducer