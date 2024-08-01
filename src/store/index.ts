import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinho'

import api from '../service/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    //Integração da API na Store
    //Adiciona o reducer gerado pelo createApi na store.
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    // Adiciona o middleware do Redux Toolkit Query na store
    //Este middleware lida com cache, requisições e atualizações automáticas.
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
