import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const register = createAsyncThunk('register', async () => {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + 'register')
  return response.json()
})

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})

export default registerSlice.reducer