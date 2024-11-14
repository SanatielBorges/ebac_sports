import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { RootState } from './redux'
import { adicionarItem } from './redux/carrinhoSlice'
import { adicionarFavorito, removerFavorito } from './redux/favoritosSlice'
import { useGetProdutosQuery } from './redux/apiSlice'
import { Produto } from './types'

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho: Produto[] = useSelector((state: RootState) => state.carrinho)
  const favoritos: Produto[] = useSelector(
    (state: RootState) => state.favoritos
  )

  const adicionarAoCarrinhoHandler = (produto: Produto) => {
    const produtoExistente = carrinho.find((item) => item.id === produto.id)
    if (!produtoExistente) {
      dispatch(adicionarItem(produto))
    } else {
      alert('Item já adicionado')
    }
  }

  const favoritarHandler = (produto: Produto) => {
    const produtoExistente = favoritos.find((item) => item.id === produto.id)
    if (produtoExistente) {
      dispatch(removerFavorito(produto))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} favoritos={favoritos} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={adicionarAoCarrinhoHandler}
          favoritar={favoritarHandler}
        />
      </div>
    </>
  )
}

export default App
