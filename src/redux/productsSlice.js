import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  total: 0,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload
    },
    setTotal(state, action) {
      state.total = action.payload
    },
  },
})

export const { setProducts, setTotal } = productsSlice.actions
export default productsSlice.reducer
