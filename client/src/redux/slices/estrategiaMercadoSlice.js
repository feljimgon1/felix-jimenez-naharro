import { createSlice } from "@reduxjs/toolkit"

const estrategiaMercado = {
  data: [
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