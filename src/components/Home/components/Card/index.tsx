import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  AddToCartAndQuantity,
  CardAddToCart,
  CardContainer,
  CardDescription,
  TagsPerCoffe,
} from './styles'
/* import coffeType from '../../../../assets/expresso-tradicional.svg' */
import { useState } from 'react'
import { TagProps } from '../..'

export interface CoffeProps {
  image: string
  id: number
  tags: TagProps[]
  name: string
  description: string
  price: number
}

export function Card({ tags, name, description, price, image }: CoffeProps) {
  let [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    quantity++

    setQuantity(quantity)
  }

  function handleDecrement() {
    if (quantity === 0) {
      return
    } else {
      quantity--
    }

    setQuantity(quantity)
  }

  function handleAddToCart() {
    console.log(quantity)
  }

  console.log(tags)

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
          <span className="dollarSign">R$</span>
          <span className="productPrice">{price}</span>
        </div>
        <AddToCartAndQuantity>
          <div className="quantitySelector">
            <button onClick={handleDecrement}>
              {' '}
              <Minus size={18} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>
              {' '}
              <Plus size={18} />
            </button>
          </div>
          <button onClick={handleAddToCart} className="addToCartButton">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AddToCartAndQuantity>
      </CardAddToCart>
    </CardContainer>
  )
}
