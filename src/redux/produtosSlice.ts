import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types' // Corrigir a importação

interface ProdutosState {
  produtos: Produto[]
}

const initialState: ProdutosState = {
  produtos: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.produtos = action.payload
    }
  }
})

export const { setProdutos } = produtosSlice.actions

export default produtosSlice.reducer
