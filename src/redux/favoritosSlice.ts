import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Produto[],
  reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      state.push(action.payload)
    },
    removerFavorito: (state, action: PayloadAction<Produto>) => {
      return state.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
