import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <div>
        <img src="" alt="" />
        <span>TRADICIONAL</span>
        <h5>Expresso Tradicional</h5>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <div>
        <div>
          <span>R$</span>
          <span>9,90</span>
        </div>
        <div>
          <div>counter</div>
          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
