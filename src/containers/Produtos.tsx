import { Game } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  jogos: Game[]
}

const Produtos = ({ jogos }: Props) => {
  return (
    <>
      <S.Produtos>
        {jogos.map((game) => (
          <Produto key={game.id} game={game} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
