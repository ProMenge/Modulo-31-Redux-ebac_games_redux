import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
