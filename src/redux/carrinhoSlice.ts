import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types'

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Produto[],
  reducers: {
    adicionarItem: (state, action: PayloadAction<Produto>) => {
      state.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<Produto>) => {
      return state.filter((item) => item.id !== action.payload.id)
    }
  }
})

export const { adicionarItem, removerItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
