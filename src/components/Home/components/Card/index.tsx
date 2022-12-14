import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartAndQuantity,
  CardAddToCart,
  CardContainer,
  CardDescription,
} from './styles'
import coffeType from '../../../../assets/coffe-type.svg'
import { ICoffe } from '../..'

interface Props {
  coffe: ICoffe
}

export function Card({ coffe }: Props) {
  return (
    <CardContainer>
      <CardDescription>
        <img src={coffeType} alt="tipo de café" />
        <span>{coffe.tag}</span>
        <h5>{coffe.name}</h5>
        <p>{coffe.description}</p>
      </CardDescription>
      <CardAddToCart>
        <div>
          <span className="dollarSign">R$</span>
          <span className="productPrice">{coffe.price}</span>
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
