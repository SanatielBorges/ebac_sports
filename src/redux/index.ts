import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import produtosReducer from './produtosSlice'
import favoritosReducer from './favoritosSlice' // Adicione esta linha
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './apiSlice'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    produtos: produtosReducer,
    favoritos: favoritosReducer, // Adicione esta linha
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
