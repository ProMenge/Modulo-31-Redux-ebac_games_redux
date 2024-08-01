import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

// Criação da API com base na URL base
const api = createApi({
  //criação da api com base na url
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    // Define um endpoint para obter os jogos
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

// Exporta o hook gerado para o endpoint getJogos
export const { useGetJogosQuery } = api

export default api
