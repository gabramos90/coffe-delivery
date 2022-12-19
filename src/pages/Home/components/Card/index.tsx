import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartAndQuantity,
  CardAddToCart,
  CardContainer,
  CardDescription,
  TagsPerCoffe,
} from './styles'
/* import coffeType from '../../../../assets/expresso-tradicional.svg' */
import { TagProps } from '../..'

export interface CoffeProps {
  image: string
  id: number
  tags: TagProps[]
  name: string
  description: string
  price: number
}

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function Card({ tags, name, description, price, image }: CoffeProps) {
  return (
    <CardContainer className="card">
      <CardDescription>
        <img src={`/coffes/${image}`} alt="tipo de café" />
        {tags &&
          tags.map((tag) => {
            return (
              <TagsPerCoffe>
                <span>{tag.firstTag}</span>
                <span>{tag.secTag}</span>
                <span>{tag.thirdTag}</span>
              </TagsPerCoffe>
            )
          })}
        <h5>{name}</h5>
        <p>{description}</p>
      </CardDescription>
      <CardAddToCart>
        <div>
          {/* <span>R$</span> */}
          <span className="productPrice">{formatter.format(price)}</span>
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
