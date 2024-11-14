import { Produto as ProdutoType } from '../types' // Corrigir a importação do tipo Produto
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[] // Adicione a propriedade favoritos
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void // Adicione a propriedade favoritar
}

const ProdutosComponent = ({
  produtos,
  favoritos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoComprar={adicionarAoCarrinho}
          favoritar={favoritar}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
