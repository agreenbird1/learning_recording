import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    message: 'hello world',
  },
  reducers: {
    addNumber(state, { payload }) {
      state.count += payload
    },
    subNumber(state, { payload }) {
      state.count += payload
    },
  },
})

export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer
