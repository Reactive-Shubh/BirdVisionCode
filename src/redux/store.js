import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import productsSlice from "./productsSlice"

const rootReducer = combineReducers({
  productsData: productsSlice,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
})

setupListeners(store.dispatch)

export default store
