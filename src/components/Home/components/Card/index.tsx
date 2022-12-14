import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartAndQuantity,
  CardAddToCart,
  CardContainer,
  CardDescription,
} from './styles'
import coffeType from '../../../../assets/coffe-type.svg'

export function Card() {
  return (
    <CardContainer>
      <CardDescription>
        <img src={coffeType} alt="tipo de café" />
        <span>TRADICIONAL</span>
        <h5>Expresso Tradicional</h5>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CardDescription>
      <CardAddToCart>
        <div>
          <span className="dollarSign">R$</span>
          <span className="productPrice">9,90</span>
        </div>
        <AddToCartAndQuantity>
          <div className="quantitySelector">
            <button>
              {' '}
              <Minus size={18} />
            </button>
            <span>1</span>
            <button>
              {' '}
              <Plus size={18} />
            </button>
          </div>
          <button className="addToCartButton">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddToCartAndQuantity>
      </CardAddToCart>
    </CardContainer>
  )
}
