import Produto from '../components/Produto'
import { useGetJogosQuery } from '../service/api'
import * as S from './styles'

const Produtos = () => {
  // Desestruturação dos dados e estado de carregamento do hook useGetJogosQuery
  const { data: jogos, isLoading } = useGetJogosQuery()

  // Exibe uma mensagem de carregamento enquanto os dados estão sendo carregados
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {jogos?.map((game) => (
          // Renderiza um componente Produto para cada jogo
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
